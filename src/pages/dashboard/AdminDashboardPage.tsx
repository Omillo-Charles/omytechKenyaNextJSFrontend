import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account, databases } from '../../utils/appwrite';
import { DATABASE_ID, PROJECTS_COLLECTION_ID, deleteProject, updateProject, fetchUserNotifications, fetchAllProjects } from '../../utils/appwriteService';

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

export default function AdminDashboardPage() {
  const [admin, setAdmin] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [notificationsError, setNotificationsError] = useState('');
  const navigate = useNavigate();
  const [showTermsModal, setShowTermsModal] = useState(false);

  useEffect(() => {
    account.get().then(setAdmin).catch(() => setAdmin(null));
  }, []);

  useEffect(() => {
    if (!admin) return;
    setLoading(true);
    databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      []
    )
      .then((res) => {
        // Filter projects assigned to this admin (by user ID)
        const assigned = res.documents.filter((p: any) => p.adminId === admin.$id);
        setProjects(assigned);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load projects.');
        setLoading(false);
      });
  }, [admin]);

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

  const handleDelete = async (projectId: string) => {
    setDeletingId(projectId);
    try {
      await deleteProject(projectId);
      setProjects((prev) => prev.filter((p) => p.$id !== projectId));
    } catch (err) {
      alert('Failed to delete project.');
    } finally {
      setDeletingId(null);
      setConfirmDeleteId(null);
    }
  };

  const handleStatusUpdate = async (projectId: string, newStatus: string) => {
    setStatusUpdatingId(projectId);
    try {
      await updateProject(projectId, { status: newStatus });
      setProjects((prev) => prev.map((p) => p.$id === projectId ? { ...p, status: newStatus } : p));
    } catch (err) {
      alert('Failed to update status.');
    } finally {
      setStatusUpdatingId(null);
    }
  };

  // Stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === 'In Progress').length;
  const completedProjects = projects.filter((p) => p.status === 'Completed').length;

  return (
    <div className="min-h-screen bg-black pt-24 pb-8 px-2">
      <div className="w-full max-w-5xl mx-auto">
        {/* Notifications Section */}
        <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg p-6 mb-8 mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-purple-400">Notifications</h2>
            <span className="text-xs text-gray-400">{notifications.length} new</span>
          </div>
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
                  <span className="text-purple-400">•</span>
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
        {/* Terms & Revenue Sharing Button */}
        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-900 rounded-xl shadow-xl p-8 max-w-2xl w-full border border-gray-700 text-left relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-2xl font-bold"
                onClick={() => setShowTermsModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Company Terms of Service</h2>
              <div className="mb-6 max-h-48 overflow-y-auto pr-2">
                {/* You can replace this with a dynamic import or fetch if needed */}
                <p>See the <a href="/terms-of-service" className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">full Terms of Service</a>.</p>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Revenue Sharing Plan</h2>
              <div className="text-gray-200 text-base leading-relaxed max-h-48 overflow-y-auto pr-2">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Revenue is shared between the company and admins based on project type and contribution.</li>
                  <li>Standard split: <span className="text-green-400 font-semibold">70% company / 30% admin</span> for most projects.</li>
                  <li>For special projects or large clients, the split may be negotiated and documented in writing.</li>
                  <li>Payouts are made monthly, with a detailed statement provided to each admin.</li>
                  <li>All revenue sharing is subject to the company’s policies and compliance requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Header with Terms Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-purple-400 mb-1">
              {admin ? `Welcome, ${admin.name || admin.email || 'Admin'}!` : 'Admin Dashboard'}
            </h2>
            <p className="text-gray-400 text-sm">Here are your assigned projects. You can search, update status, or delete them.</p>
          </div>
          <button
            onClick={() => navigate('/admin/company-info')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2h5m2-10V4a2 2 0 012-2h2a2 2 0 012 2v6m-6 4h6" /></svg>
            Company Terms & Revenue Sharing
          </button>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-purple-400">{totalProjects}</span>
            <span className="text-gray-300 mt-2">Total Assigned</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-blue-400">{activeProjects}</span>
            <span className="text-gray-300 mt-2">Active</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow border border-gray-800">
            <span className="text-3xl font-bold text-green-400">{completedProjects}</span>
            <span className="text-gray-300 mt-2">Completed</span>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-8 flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or status..."
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Project Cards */}
        {loading ? (
          <div className="text-center text-gray-400 py-12 text-lg">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-12 text-lg">{error}</div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-br from-purple-900/40 to-cyan-900/30 rounded-2xl shadow-inner border border-cyan-800/20">
            <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/60 to-cyan-500/40 shadow-lg">
              <svg className="w-12 h-12 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4zm0 10c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">No Projects Yet</h3>
            <p className="text-gray-300 text-base max-w-md mx-auto mb-2">You haven&apos;t been assigned any projects yet. When a project is assigned to you, it will appear here. Stay tuned for new opportunities!</p>
            <div className="mt-4">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-all">Enjoy your day, Admin 🚀</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.$id} className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-white">{project.name || 'Untitled Project'}</span>
                    {project.status && (
                      <span
                        className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold
                          ${project.status === 'Completed' ? 'bg-green-900 text-green-400' :
                            project.status === 'In Progress' ? 'bg-blue-900 text-blue-400' :
                            project.status === 'Not Started' ? 'bg-gray-800 text-gray-300' :
                            'bg-orange-900 text-orange-400'}
                        `}
                      >
                        {project.status}
                      </span>
                    )}
                    {project.colors && Array.isArray(project.colors) && project.colors.length > 0 && (
                      <div className="flex gap-1 ml-2">
                        {project.colors.map((color: string, idx: number) => (
                          <span key={idx} className="w-4 h-4 rounded-full border border-gray-700" style={{ backgroundColor: color }} title={color}></span>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Project Created Date */}
                  {project.$createdAt && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                      <span>Created: {formatDate(project.$createdAt)}</span>
                    </div>
                  )}
                  {project.description && (
                    <div className="text-gray-300 mb-2 text-sm italic">{project.description}</div>
                  )}
                  <div className="flex flex-wrap gap-4 items-center text-sm mb-2">
                    {project.phone && (
                      <a
                        href={`https://wa.me/${project.phone.replace(/[^\d]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                        title="Chat with Client on WhatsApp"
                      >
                        WhatsApp Client
                      </a>
                    )}
                    {project.budget !== undefined && project.budget !== null && project.budget !== '' && (
                      <div className="flex items-center gap-1 text-green-400 bg-green-900/30 px-2 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                        <span>${project.budget}</span>
                      </div>
                    )}
                    {project.deadline && (
                      <div className="flex items-center gap-1 text-blue-400 bg-blue-900/30 px-2 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>{formatDate(project.deadline)}</span>
                      </div>
                    )}
                    {project.clientId && (
                      <div className="flex items-center gap-1 text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Client ID: {project.clientId}</span>
                      </div>
                    )}
                  </div>
                  {project.files && Array.isArray(project.files) && project.files.length > 0 && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-400 font-semibold flex items-center gap-1">
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
                </div>
                <div className="border-t border-gray-800 pt-4 flex flex-col md:items-end">
                  {/* Status Update Segmented Button Group */}
                  <div className="flex w-full rounded-full overflow-hidden border border-gray-700 mb-4">
                    {['Not Started', 'In Progress', 'Completed'].map(status => (
                      <button
                        key={status}
                        className={`flex-1 px-4 py-2 text-xs font-semibold transition-colors
                          ${project.status === status
                            ? status === 'Completed'
                              ? 'bg-green-600 text-white'
                              : status === 'In Progress'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-700 text-white'
                            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'}
                        `}
                        onClick={() => handleStatusUpdate(project.$id, status)}
                        disabled={statusUpdatingId === project.$id || project.status === status}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                  {/* Full-width Delete Button */}
                  <button
                    className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow hover:opacity-90 transition-all mt-2"
                    onClick={() => setConfirmDeleteId(project.$id)}
                    disabled={deletingId === project.$id}
                  >
                    {deletingId === project.$id ? 'Deleting...' : 'Delete Project'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Delete Confirmation Modal */}
        {confirmDeleteId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-900 rounded-xl shadow-xl p-8 max-w-sm w-full border border-gray-700 text-center">
              <h3 className="text-xl font-bold mb-4 text-red-400">Delete Project?</h3>
              <p className="mb-6 text-gray-300">Are you sure you want to delete this project? This action cannot be undone.</p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-5 py-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors font-semibold"
                  onClick={() => setConfirmDeleteId(null)}
                  disabled={deletingId === confirmDeleteId}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow hover:opacity-90 transition-all"
                  onClick={() => handleDelete(confirmDeleteId!)}
                  disabled={deletingId === confirmDeleteId}
                >
                  {deletingId === confirmDeleteId ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}