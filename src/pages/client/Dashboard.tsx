import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../utils/appwrite';
import { fetchUserProjects, deleteProject, updateProject, fetchUserNotifications, deleteNotification } from '../../utils/appwriteService';
import { Pencil, Trash2 } from 'lucide-react';

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
}

export default function ClientDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [notificationsError, setNotificationsError] = useState('');
  const [expandedDesc, setExpandedDesc] = useState<{ [id: string]: boolean }>({});
  const [editProject, setEditProject] = useState<any>(null);
  const [editForm, setEditForm] = useState<any>(null);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Function to handle payment button click
  const handleMakePayment = (project: any) => {
    // Navigate to pricing page with payment section focus
    navigate('/pricing', { 
      state: { 
        scrollToPayment: true,
        projectId: project.$id,
        projectName: project.name 
      } 
    });
  };

  useEffect(() => {
    account.get().then(setUser).catch(() => setUser(null));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchUserProjects()
      .then((docs) => {
        setProjects(docs);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load projects.');
        setLoading(false);
      });
  }, []);

  // Automatic polling for project updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchUserProjects()
        .then((docs) => setProjects(docs))
        .catch(() => {});
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) =>
          (p.name || '').toLowerCase().includes(search.toLowerCase()) ||
          (p.status || '').toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, projects]);

  useEffect(() => {
    setNotificationsLoading(true);
    fetchUserNotifications()
      .then((docs) => {
        setNotifications(docs);
        setNotificationsLoading(false);
      })
      .catch((err) => {
        setNotificationsError('Failed to load notifications.');
        setNotificationsLoading(false);
      });
  }, []);

  // Add clear notifications handler
  const handleClearNotifications = async () => {
    if (!notifications.length) return;
    for (const n of notifications) {
      try {
        await deleteNotification(n.$id);
      } catch (e) {
        // Optionally handle error
      }
    }
    setNotifications([]);
  };

  // Stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === 'In Progress').length;
  const completedProjects = projects.filter((p) => p.status === 'Completed').length;

  // Edit handlers
  const openEditModal = (project: any) => {
    setEditProject(project);
    setEditForm({ ...project });
  };
  const closeEditModal = () => {
    setEditProject(null);
    setEditForm(null);
  };
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditLoading(true);
    try {
      await updateProject(editProject.$id, editForm);
      setProjects((prev) => prev.map((p) => p.$id === editProject.$id ? { ...p, ...editForm } : p));
      closeEditModal();
    } catch (err) {
      alert('Failed to update project.');
    } finally {
      setEditLoading(false);
    }
  };
  // Delete handler
  const handleDelete = async (projectId: string) => {
    setDeleteId(projectId);
    try {
      await deleteProject(projectId);
      setProjects((prev) => prev.filter((p) => p.$id !== projectId));
    } catch (err) {
      alert('Failed to delete project.');
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-8 px-2">
      <div className="w-full max-w-5xl mx-auto">
        {/* Notifications Section */}
        <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg p-6 mb-8 mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-cyan-400">Notifications</h2>
            <span className="text-xs text-gray-400">{notifications.length} new</span>
          </div>
          {notifications.length > 0 && !notificationsLoading && (
            <button
              onClick={handleClearNotifications}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full font-semibold shadow hover:opacity-90 transition-all"
            >
              Clear Notifications
            </button>
          )}
          {notificationsLoading ? (
            <div className="text-gray-500 text-center">Loading notifications...</div>
          ) : notificationsError ? (
            <div className="text-red-400 text-center">{notificationsError}</div>
          ) : notifications.length === 0 ? (
            <div className="text-gray-500 text-center">No notifications</div>
          ) : (
            <ul className="divide-y divide-gray-800">
              {notifications.map((n) => (
                <li key={n.$id} className="py-2 flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span className="text-white font-semibold">{n.message}</span>
                  {n.projectId && (
                    <span className="ml-2 text-xs text-gray-400">(Project ID: {n.projectId})</span>
                  )}
                  {!n.read && <span className="ml-auto text-xs text-green-400">New</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-cyan-400 mb-1">
              {user ? `Welcome, ${user.name || user.email || 'Client'}!` : 'Your Projects'}
            </h2>
            <p className="text-gray-400 text-sm">Here are your recent projects. You can search, view, or delete them.</p>
          </div>
          <button
            onClick={() => navigate('/client/create-project')}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow hover:opacity-90 transition-all text-sm"
          >
            + Create New Project
          </button>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-cyan-400">{totalProjects}</span>
            <span className="text-gray-300 mt-2">Total Projects</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-blue-400">{activeProjects}</span>
            <span className="text-gray-300 mt-2">Active Projects</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-green-400">{completedProjects}</span>
            <span className="text-gray-300 mt-2">Completed Projects</span>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-8 flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or status..."
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        {/* Project Cards */}
        {loading ? (
          <div className="text-center text-gray-400 py-12 text-lg">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-12 text-lg">{error}</div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-br from-cyan-900/40 to-purple-900/30 rounded-2xl shadow-inner border border-cyan-800/20">
            <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/60 to-purple-500/40 shadow-lg">
              <span className="text-5xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">No Projects Yet</h3>
            <p className="text-gray-300 text-base max-w-md mx-auto mb-2">You haven&apos;t created any projects yet. Start your first project to see it here!</p>
            <div className="mt-4">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-all">Start Building 🚀</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.$id}
                className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-cyan-950/80 rounded-3xl p-7 shadow-2xl border border-cyan-900/30 flex flex-col gap-6 backdrop-blur-lg overflow-hidden group transition-transform hover:scale-105 hover:shadow-cyan-500/20"
                style={{ minHeight: '340px' }}
              >
                {/* Status Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl transition-all duration-300 ${
                    project.status === 'Completed'
                      ? 'bg-gradient-to-r from-green-400 to-green-600'
                      : project.status === 'In Progress'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : project.status === 'Not Started'
                      ? 'bg-gradient-to-r from-gray-400 to-gray-600'
                      : 'bg-gradient-to-r from-orange-400 to-orange-600'
                  }`}
                ></div>
                {/* Project Name & Status */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-extrabold text-white tracking-tight flex-1 truncate">
                    {project.name || 'Untitled Project'}
                  </span>
                  {project.status && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow transition-all
                        ${project.status === 'Completed' ? 'bg-green-900/80 text-green-300 border border-green-500/30' :
                          project.status === 'In Progress' ? 'bg-blue-900/80 text-blue-300 border border-blue-500/30' :
                          project.status === 'Not Started' ? 'bg-gray-800/80 text-gray-200 border border-gray-500/30' :
                          'bg-orange-900/80 text-orange-300 border border-orange-500/30'}
                      `}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                {/* Description with Read more/Show less */}
                {project.description && (
                  <div className="text-gray-200 mb-2 text-base italic">
                    {project.description.length > 120 ? (
                      <>
                        {expandedDesc[project.$id]
                          ? project.description
                          : project.description.slice(0, 120) + '...'}
                        <button
                          className="ml-2 text-cyan-400 underline text-sm focus:outline-none"
                          onClick={() => setExpandedDesc((prev) => ({ ...prev, [project.$id]: !prev[project.$id] }))}
                        >
                          {expandedDesc[project.$id] ? 'Show less' : 'Read more'}
                        </button>
                      </>
                    ) : (
                      project.description
                    )}
                  </div>
                )}
                {/* Info Section */}
                <div className="flex flex-col gap-2 mb-2">
                  {project.$createdAt && (
                    <div className="flex items-center gap-2 text-xs text-cyan-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                      <span>Created: {formatDate(project.$createdAt)}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {project.phone && (
                      <div className="flex items-center gap-2 text-cyan-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>{project.phone}</span>
                      </div>
                    )}
                    {project.budget !== undefined && project.budget !== null && project.budget !== '' && (
                      <div className="flex items-center gap-2 text-green-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                        <span>${project.budget}</span>
                      </div>
                    )}
                    {project.deadline && (
                      <div className="flex items-center gap-2 text-blue-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>{formatDate(project.deadline)}</span>
                      </div>
                    )}
                    {project.colors && Array.isArray(project.colors) && project.colors.length > 0 && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                        {project.colors.map((color: string, idx: number) => (
                          <span key={idx} className="w-4 h-4 rounded-full border border-gray-700" style={{ backgroundColor: color }} title={color}></span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Files */}
                {project.files && Array.isArray(project.files) && project.files.length > 0 && (
                  <div className="mt-2">
                    <span className="text-sm text-cyan-200 font-semibold flex items-center gap-1">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 10-2.828-2.828z" /></svg>
                      Files:
                    </span>
                    <ul className="list-disc list-inside text-xs text-cyan-300 mt-1">
                      {project.files.map((fileId: string, idx: number) => (
                        <li key={fileId || idx}>
                          <a
                            href={`https://cloud.appwrite.io/v1/storage/buckets/${project.bucketId || ''}/files/${fileId}/view?project=${project.projectId || ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-cyan-400"
                          >
                            Download File {idx + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Chat with Admin Button - full width */}
                <a
                  href="https://wa.me/254745511354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-colors mt-4 shadow-lg shadow-cyan-500/10"
                  title="Chat with Admin on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                  Chat with Admin
                </a>
                {/* Make Payment Button */}
                <button
                  onClick={() => handleMakePayment(project)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-base rounded-full font-semibold transition-colors mt-2 shadow-lg shadow-cyan-500/10
                    ${project.paymentEnabled ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:opacity-90' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}
                  disabled={!project.paymentEnabled}
                  title={project.paymentEnabled ? 'Proceed to payment' : 'Waiting for admin approval'}
                >
                  💳 Make Payment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 