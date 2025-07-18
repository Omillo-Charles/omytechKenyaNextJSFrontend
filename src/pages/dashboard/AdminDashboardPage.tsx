import React, { useEffect, useState } from 'react';
import { account } from '../../utils/appwrite';
import { fetchUserNotifications, updateProject } from '../../utils/appwriteService';
import { databases, ID } from '../../utils/appwrite';
import { Query } from 'appwrite';

const DATABASE_ID = '687a08cf000db9a0dee5';
const PROJECTS_COLLECTION_ID = '687a08fa002515aec2bb';

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const formatDate = (dateStr?: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const AdminDashboardPage = () => {
  const [admin, setAdmin] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [notificationsError, setNotificationsError] = useState<string | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    account.get()
      .then((user) => {
        setAdmin(user);
        setProfileLoading(false);
      })
      .catch(() => {
        setAdmin(null);
        setProfileLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!admin) return;
    setProjectsLoading(true);
    databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      [Query.equal('adminId', admin.email)]
    )
      .then((res) => {
        setProjects(res.documents);
        setProjectsLoading(false);
      })
      .catch((err) => {
        setProjectsError('Failed to load projects.');
        setProjectsLoading(false);
      });
  }, [admin]);

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

  // Stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;

  // Status update handler
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4 pt-24">
      {/* Profile Section */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            {profileLoading ? '?' : getInitials(admin?.name || 'Admin')}
          </div>
          <div>
            <div className="text-2xl font-extrabold flex items-center gap-2">
              <span className="animate-waving-hand text-2xl">👋</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {profileLoading ? 'Loading...' : admin?.name || 'Admin'}
              </span>
            </div>
            {!profileLoading && admin?.email && (
              <div className="text-gray-400 text-sm mt-1">{admin.email}</div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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

      {/* Notifications */}
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-cyan-400">Notifications</h2>
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
                <span className="text-cyan-400">•</span>
                <span>{n.message}</span>
                {n.$createdAt && (
                  <span className="ml-auto text-xs text-gray-500">{formatDate(n.$createdAt)}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Project List */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Assigned Projects</h2>
        {projectsLoading ? (
          <div className="text-center text-gray-400 py-12 text-lg">Loading projects...</div>
        ) : projectsError ? (
          <div className="text-center text-red-400 py-12 text-lg">{projectsError}</div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-400 py-12 text-lg">No projects assigned to you yet.</div>
        ) : (
          <ul className="space-y-6">
            {projects.map((project) => (
              <li key={project.$id} className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 flex flex-col gap-6">
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
                  </div>
                  {project.description && (
                    <div className="text-gray-300 mb-2 text-sm italic">{project.description}</div>
                  )}
                  <div className="flex flex-wrap gap-4 items-center text-sm mb-2">
                    {project.phone && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>{project.phone}</span>
                      </div>
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
                    {project.$createdAt && (
                      <div className="flex items-center gap-1 text-gray-400 bg-gray-800/60 px-2 py-1 rounded-full mt-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                        <span>Created: {formatDate(project.$createdAt)}</span>
                      </div>
                    )}
                  </div>
                  {project.colors && Array.isArray(project.colors) && project.colors.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {project.colors.map((color: string, idx: number) => (
                        <span key={idx} className="w-5 h-5 rounded-full border border-gray-700" style={{ backgroundColor: color }} title={color}></span>
                      ))}
                    </div>
                  )}
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
                              href={`https://fra.cloud.appwrite.io/v1/storage/buckets/68776acb00320d669994/files/${fileId}/view?project=687617b900303b350209`}
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
                {/* Client Info */}
                {project.clientId && (
                  <div className="border-t border-gray-800 pt-4 flex flex-col md:items-end">
                    <div className="text-sm text-gray-300 mb-2">
                      <span className="font-semibold text-cyan-400">Client ID:</span> {project.clientId}
                    </div>
                    {/* Status Update Actions */}
                    <div className="flex gap-2 mt-2">
                      <button
                        className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${project.status === 'Not Started' ? 'bg-gray-800 text-gray-300' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}
                        onClick={() => handleStatusUpdate(project.$id, 'Not Started')}
                        disabled={statusUpdatingId === project.$id || project.status === 'Not Started'}
                      >
                        Not Started
                      </button>
                      <button
                        className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${project.status === 'In Progress' ? 'bg-blue-900 text-blue-400' : 'bg-gray-900 text-blue-300 hover:bg-blue-900'}`}
                        onClick={() => handleStatusUpdate(project.$id, 'In Progress')}
                        disabled={statusUpdatingId === project.$id || project.status === 'In Progress'}
                      >
                        In Progress
                      </button>
                      <button
                        className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${project.status === 'Completed' ? 'bg-green-900 text-green-400' : 'bg-gray-900 text-green-300 hover:bg-green-900'}`}
                        onClick={() => handleStatusUpdate(project.$id, 'Completed')}
                        disabled={statusUpdatingId === project.$id || project.status === 'Completed'}
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-waving-hand {
          display: inline-block;
          animation: wave 1.8s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboardPage; 