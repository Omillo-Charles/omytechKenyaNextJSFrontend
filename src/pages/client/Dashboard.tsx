import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../utils/appwrite';
import { fetchUserProjects, deleteProject, updateProject, fetchUserNotifications } from '../../utils/appwriteService';

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
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const [editProject, setEditProject] = useState<any | null>(null);
  const [editForm, setEditForm] = useState<any | null>(null);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState('');
  const [editSuccess, setEditSuccess] = useState('');
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [notificationsError, setNotificationsError] = useState('');


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
    setEditSuccess('');
  };
  const closeEditModal = () => {
    setEditProject(null);
    setEditForm(null);
    setEditError('');
    setEditSuccess('');
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
    setEditSuccess('');
    try {
      await updateProject(editProject.$id, editForm);
      setProjects((prev) => prev.map((p) => p.$id === editProject.$id ? { ...p, ...editForm } : p));
      setEditSuccess('Project updated successfully!');
      setTimeout(() => closeEditModal(), 1200);
    } catch (err: any) {
      setEditError(err?.message || 'Failed to update project.');
    } finally {
      setEditLoading(false);
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
          <div className="text-center text-gray-400 py-12 text-lg">
            <img src="https://illustrations.popsy.co/gray/empty-state.svg" alt="No projects" className="mx-auto mb-4 w-40" />
            You have not created any projects yet.
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
                  {/* Assigned Admin info */}
                  {project.adminName && project.adminEmail ? (
                    <div className="flex flex-col items-start md:items-end gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-lg font-bold text-white shadow">
                          {getInitials(project.adminName)}
                        </div>
                        <div className="text-sm text-gray-300">
                          <span className="font-semibold text-cyan-400">Assigned Admin:</span> {project.adminName}
                        </div>
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
                      className="px-3 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 font-semibold hover:bg-blue-800/60 transition-colors"
                      onClick={() => navigate(`/client/chat/${project.adminId}`)}
                      disabled={!project.adminId}
                      title="Chat with Admin"
                    >
                      Chat with Admin
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
        {/* Edit Project Modal */}
        {editProject && editForm && (
          <div className="fixed inset-0 z-50 flex justify-center bg-black/60 pt-28">
            <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700 flex flex-col max-h-[70vh] overflow-y-auto">
              <div className="sticky top-0 bg-gray-900 rounded-t-2xl px-8 pt-8 pb-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-yellow-300">Edit Project</h3>
              </div>
              <div className="px-8 py-6">
                {editError && <div className="mb-2 text-red-400 text-center font-semibold">{editError}</div>}
                {editSuccess && <div className="mb-2 text-green-400 text-center font-semibold">{editSuccess}</div>}
                <form onSubmit={handleEditSubmit} className="space-y-5">
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
                  <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
                    <div className="flex-1">
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
                  <div>
                    <label className="block text-gray-200 mb-1">Project Colors</label>
                    <div className="flex flex-wrap gap-2 items-center">
                      {['#2563eb','#22d3ee','#f59e42','#f43f5e','#a21caf','#16a34a','#fbbf24','#e11d48','#64748b','#fff','#000'].map((color) => (
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
                  <div className="flex justify-end gap-4 mt-8 border-t border-gray-800 pt-6">
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
          </div>
        )}
      </div>
    </div>
  );
} 