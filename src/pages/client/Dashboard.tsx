import React, { useEffect, useState } from 'react';
import { account } from '../../utils/appwrite';
import { fetchUserProjects, fetchUserNotifications, deleteProject, updateProject } from '../../utils/appwriteService';

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

interface Project {
  $id: string;
  name?: string;
  status?: string;
  deadline?: string;
  admin?: { name: string; email: string };
  colors?: string[];
  [key: string]: any; // Allow extra fields from Appwrite
}

const PRESET_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#FA7436', '#477BFF', '#9B59B6', '#3498DB', '#1ABC9C',
  '#2ECC71', '#F1C40F', '#E67E22', '#E74C3C', '#34495E', '#2C3E50', '#7F8C8D', '#95A5A6', '#D35400', '#C0392B',
  '#ECF0F1', '#BDC3C7', '#95A5A6', '#7B8B90', '#5D6D7E', '#34495E', '#2C3E50', '#1A1A1A', '#3498DB', '#1ABC9C',
  '#2ECC71', '#F1C40F', '#E67E22', '#E74C3C', '#34495E', '#2C3E50', '#7F8C8D', '#95A5A6', '#D35400', '#C0392B',
];

const ClientDashboard = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [profileLoading, setProfileLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [notificationsError, setNotificationsError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [editProject, setEditProject] = useState<any | null>(null);
  const [editForm, setEditForm] = useState<any | null>(null);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');

  useEffect(() => {
    account.get()
      .then((user) => {
        setUserName(user.name);
        setUserEmail(user.email);
        setProfileLoading(false);
      })
      .catch(() => {
        setUserName('');
        setUserEmail('');
        setProfileLoading(false);
      });
  }, []);

  useEffect(() => {
    setProjectsLoading(true);
    fetchUserProjects()
      .then((docs) => {
        setProjects(docs);
        setProjectsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setProjectsError('Failed to load projects.');
        setProjectsLoading(false);
      });
  }, []);

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

  // Add a date formatting helper
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

  // Delete project handler
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

  // Edit project handlers
  const openEditModal = (project: any) => {
    setEditProject(project);
    setEditForm({
      name: project.name || '',
      phone: project.phone || '',
      description: project.description || '',
      budget: project.budget || '',
      deadline: project.deadline || '',
      colors: Array.isArray(project.colors) ? [...project.colors] : [],
      status: project.status || '',
    });
    setEditError('');
  };
  const closeEditModal = () => {
    setEditProject(null);
    setEditForm(null);
    setEditError('');
  };
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleEditColorAdd = (color: string) => {
    if (!editForm.colors.includes(color)) {
      setEditForm({ ...editForm, colors: [...editForm.colors, color] });
    }
  };
  const handleEditColorRemove = (color: string) => {
    setEditForm({ ...editForm, colors: editForm.colors.filter((c: string) => c !== color) });
  };
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError('');
    try {
      await updateProject(editProject.$id, editForm);
      setProjects((prev) => prev.map((p) => p.$id === editProject.$id ? { ...p, ...editForm } : p));
      closeEditModal();
    } catch (err: any) {
      setEditError(err?.message || 'Failed to update project.');
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4 pt-24">
      {/* Profile Section */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            {/* Avatar Initials */}
            <span>{profileLoading ? '?' : getInitials(userName || 'User')}</span>
          </div>
          <div>
            <div className="text-2xl font-extrabold flex items-center gap-2">
              <span className="animate-waving-hand text-2xl">👋</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {profileLoading ? 'Loading...' : userName || 'User Name'}
              </span>
            </div>
            <div className="text-gray-400 text-sm mt-1">{profileLoading ? '...' : userEmail || 'user@email.com'}</div>
          </div>
        </div>
        <a
          href="/client/create-project"
          className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow hover:opacity-90 transition-all text-sm flex items-center gap-2 mt-4 md:mt-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Create Project
        </a>
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
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Your Projects</h2>
        {projectsLoading ? (
          <div className="text-center text-gray-400 py-12 text-lg">Loading projects...</div>
        ) : projectsError ? (
          <div className="text-center text-red-400 py-12 text-lg">{projectsError}</div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-400 py-12 text-lg">You have not created any projects yet.</div>
        ) : (
          <ul className="space-y-6">
            {projects.map((project) => (
              <li key={project.$id} className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 flex flex-col gap-6">
                {/* Project Details Section */}
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
                        {project.colors.map((color, idx) => (
                          <span key={idx} className="w-4 h-4 rounded-full border border-gray-700" style={{ backgroundColor: color }} title={color}></span>
                        ))}
                      </div>
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
                <div className="border-t border-gray-800 pt-4 flex flex-col md:items-end">
                  {/* Assigned Admin info */}
                  {project.adminName && project.adminEmail ? (
                    <div className="flex flex-col items-start md:items-end gap-2 mb-2">
                      <div className="text-sm text-gray-300">
                        <span className="font-semibold text-cyan-400">Assigned Admin:</span> {project.adminName}
                      </div>
                      <a href={`mailto:${project.adminEmail}`} className="text-xs text-blue-400 underline hover:text-blue-300 transition-colors">
                        {project.adminEmail}
                      </a>
                    </div>
                  ) : null}
                  {/* Edit/Delete Actions */}
                  <div className="flex gap-2 mt-2">
                    <button
                      className="px-3 py-1 text-xs rounded-full bg-yellow-900/40 text-yellow-300 font-semibold hover:bg-yellow-800/60 transition-colors"
                      onClick={() => openEditModal(project)}
                      disabled={deletingId === project.$id}
                      title="Edit project"
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-xs rounded-full bg-red-900/40 text-red-300 font-semibold hover:bg-red-800/60 transition-colors"
                      onClick={() => setConfirmDeleteId(project.$id)}
                      disabled={deletingId === project.$id}
                    >
                      {deletingId === project.$id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
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
                onClick={() => handleDelete(confirmDeleteId)}
                disabled={deletingId === confirmDeleteId}
              >
                {deletingId === confirmDeleteId ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Project Modal */}
      {editProject && editForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-700 text-white">
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Edit Project</h3>
            {editError && <div className="mb-2 text-red-400 text-center font-semibold">{editError}</div>}
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-200 mb-1" htmlFor="edit-name">Project Name</label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter project name"
                  disabled={editLoading}
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-1" htmlFor="edit-phone">Phone Number</label>
                <input
                  type="tel"
                  id="edit-phone"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleEditChange}
                  required
                  pattern="[0-9\-\+\s\(\)]{7,}"
                  className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter your phone number"
                  disabled={editLoading}
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-1" htmlFor="edit-description">Description</label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Describe your project"
                  rows={3}
                  disabled={editLoading}
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-gray-200 mb-1" htmlFor="edit-budget">Budget <span className="text-xs text-gray-400">(in US Dollars)</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      id="edit-budget"
                      name="budget"
                      value={editForm.budget}
                      onChange={handleEditChange}
                      min="0"
                      className="w-full pl-7 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                      placeholder="e.g. 1000"
                      disabled={editLoading}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-200 mb-1" htmlFor="edit-deadline">Deadline</label>
                  <input
                    type="date"
                    id="edit-deadline"
                    name="deadline"
                    value={editForm.deadline}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                    disabled={editLoading}
                  />
                </div>
              </div>
              {/* Color Picker - Swatch Grid */}
              <div>
                <label className="block text-gray-200 mb-1">Project Colors</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {PRESET_COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`w-8 h-8 rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 ${editForm.colors.includes(color) ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-700'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleEditColorAdd(color)}
                      aria-label={`Add color ${color}`}
                      disabled={editLoading}
                    />
                  ))}
                </div>
                {editForm.colors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {editForm.colors.map((color: string) => (
                      <div key={color} className="flex items-center gap-1 bg-gray-800 rounded-full px-3 py-1 border border-gray-700">
                        <span className="w-4 h-4 rounded-full inline-block mr-1" style={{ backgroundColor: color }} />
                        <span className="text-xs text-gray-200">{color}</span>
                        <button
                          type="button"
                          className="ml-1 text-red-400 hover:text-red-600 text-lg px-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                          title="Remove color"
                          aria-label="Remove color"
                          onClick={() => handleEditColorRemove(color)}
                          disabled={editLoading}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  className="px-5 py-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors font-semibold"
                  onClick={closeEditModal}
                  disabled={editLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold shadow hover:opacity-90 transition-all"
                  disabled={editLoading}
                >
                  {editLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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

export default ClientDashboard; 