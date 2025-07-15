import React, { useState } from 'react';

// Mock data for demonstration
const mockProjects = [
  {
    id: '1',
    client: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+1234567890',
    },
    name: 'Brand Website',
    description: 'A modern website for branding.',
    status: 'Pending',
    colors: ['#00bcd4', '#ff9800'],
    attachments: ['logo.png', 'brief.pdf'],
    chat: [
      { from: 'admin', text: 'Welcome to your project chat!', time: '09:00' },
      { from: 'client', text: 'Thank you!', time: '09:01' },
    ],
  },
  {
    id: '2',
    client: {
      name: 'Bob Smith',
      email: 'bob@example.com',
      phone: '+1987654321',
    },
    name: 'Mobile App',
    description: 'A cross-platform mobile app.',
    status: 'In Progress',
    colors: ['#4caf50', '#e91e63'],
    attachments: ['wireframe.pdf'],
    chat: [
      { from: 'admin', text: 'We have started your app!', time: '10:00' },
    ],
  },
];

const statusOptions = ['Pending', 'In Progress', 'Completed'];

const AdminDashboard = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [selectedId, setSelectedId] = useState<string | null>(projects[0]?.id || null);
  const [search, setSearch] = useState('');
  // For status editing
  const selectedProject = projects.find(p => p.id === selectedId);
  const [statusDraft, setStatusDraft] = useState(selectedProject?.status || '');
  React.useEffect(() => {
    setStatusDraft(selectedProject?.status || '');
  }, [selectedProject]);

  // Handlers for editing (mock, no real save)
  const handleDescriptionChange = (desc: string) => {
    setProjects(projects.map(p => p.id === selectedId ? { ...p, description: desc } : p));
  };
  const handleRemoveAttachment = (filename: string) => {
    setProjects(projects.map(p => p.id === selectedId ? { ...p, attachments: p.attachments.filter(f => f !== filename) } : p));
  };
  const handleAddAttachment = (file: File) => {
    setProjects(projects.map(p => p.id === selectedId ? { ...p, attachments: [...p.attachments, file.name] } : p));
  };
  // Chat (UI only)
  const [chatInput, setChatInput] = useState('');
  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setProjects(projects.map(p => p.id === selectedId ? {
      ...p,
      chat: [...p.chat, { from: 'admin', text: chatInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }],
    } : p));
    setChatInput('');
  };

  // Filtered projects
  const filteredProjects = projects.filter(p =>
    p.client.name.toLowerCase().includes(search.toLowerCase()) ||
    p.client.email.toLowerCase().includes(search.toLowerCase()) ||
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20 px-2">
      <div className="bg-gray-900 shadow-2xl rounded-3xl p-8 w-full max-w-6xl border border-gray-800 flex flex-col md:flex-row gap-8">
        {/* Sidebar: Assigned Clients/Projects */}
        <div className="md:w-1/3 w-full">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Assigned Clients</h2>
          <input
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
            placeholder="Search clients or projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ul className="space-y-2">
            {filteredProjects.map(p => (
              <li key={p.id}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg border border-gray-700 transition font-semibold ${selectedId === p.id ? 'bg-cyan-900/40 text-cyan-300 border-cyan-500' : 'bg-gray-800 text-white hover:bg-cyan-900/20'}`}
                  onClick={() => setSelectedId(p.id)}
                >
                  <div className="flex flex-col">
                    <span className="text-base">{p.client.name}</span>
                    <span className="text-xs text-cyan-200">{p.name}</span>
                  </div>
                </button>
              </li>
            ))}
            {filteredProjects.length === 0 && <li className="text-gray-500 text-center py-4">No clients found.</li>}
          </ul>
        </div>
        {/* Main: Client Profile Viewer & Project Management */}
        <div className="md:w-2/3 w-full">
          {selectedProject ? (
            <div className="space-y-8">
              {/* Client Profile Viewer */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-2">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{selectedProject.client.name}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-cyan-100 text-sm mb-2">
                  <span>Email: <span className="text-white">{selectedProject.client.email}</span></span>
                  <span>Phone: <span className="text-white">{selectedProject.client.phone}</span></span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.colors.map(color => (
                    <span key={color} className="w-6 h-6 rounded-full border-2 border-cyan-400" style={{ background: color }} title={color}></span>
                  ))}
                </div>
              </div>
              {/* Editable Project Fields & Status Control */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <span className="text-cyan-200 font-semibold mr-2">Project:</span>
                    <span className="text-white font-bold text-lg">{selectedProject.name}</span>
                  </div>
                  <div>
                    <span className="text-cyan-200 font-semibold mr-2">Status:</span>
                    <select
                      className="bg-gray-900 border border-cyan-500 text-cyan-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                      value={statusDraft}
                      onChange={e => setStatusDraft(e.target.value)}
                    >
                      {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <button
                      className="ml-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50"
                      disabled={statusDraft === selectedProject.status}
                      onClick={() => setProjects(projects.map(p => p.id === selectedId ? { ...p, status: statusDraft } : p))}
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-cyan-200 font-medium mb-1">Description</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                    value={selectedProject.description}
                    rows={3}
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-cyan-200 font-medium mb-1">Attachments</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.attachments.map(file => (
                      <span key={file} className="bg-gray-700 text-cyan-100 px-3 py-1 rounded-full flex items-center gap-2">
                        <a
                          href={`/files/${file}`}
                          download
                          className="underline hover:text-cyan-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {file}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Real-Time Chat (UI only) */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-cyan-200 font-semibold mb-2">Project Chat</h4>
                <div className="h-40 overflow-y-auto bg-gray-900 rounded-lg p-3 mb-3 flex flex-col gap-2">
                  {selectedProject.chat.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'admin' ? 'justify-end' : 'justify-start'}`}>
                      <span className={`px-3 py-1 rounded-lg text-sm ${msg.from === 'admin' ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-cyan-100'}`}>{msg.text}</span>
                      <span className="ml-2 text-xs text-gray-400 self-end">{msg.time}</span>
                    </div>
                  ))}
                </div>
                <form
                  className="flex gap-2"
                  onSubmit={e => { e.preventDefault(); handleSendChat(); }}
                >
                  <input
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                    placeholder="Type a message..."
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-center py-12">Select a client to view project details.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 