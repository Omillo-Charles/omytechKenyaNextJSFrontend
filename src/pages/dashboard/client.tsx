import React, { useState } from 'react';

// Mock project data for the client
const initialProject = {
  name: 'Brand Website',
  description: 'A modern website for branding.',
  status: 'Pending',
  colors: ['#00bcd4', '#ff9800'],
  attachments: ['logo.png', 'brief.pdf'],
  chat: [
    { from: 'client', text: 'Hi, I just submitted my project!', time: '09:00' },
    { from: 'admin', text: 'Thanks! We will review it soon.', time: '09:01' },
  ],
};

// Mock admin data
const mockAdmin = {
  name: 'Jane Doe',
  email: 'jane.admin@omytech.com',
  phone: '+254700000000',
};

const ClientDashboard = () => {
  const [project, setProject] = useState(initialProject);
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState({
    name: project.name,
    description: project.description,
    colors: [...project.colors],
  });

  // Color editing
  const [colorInput, setColorInput] = useState('#00bcd4');
  const handleAddColor = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const color = colorInput.trim();
    if (color && !draft.colors.includes(color)) {
      setDraft({ ...draft, colors: [...draft.colors, color] });
      setColorInput('#00bcd4');
    }
  };
  const handleRemoveColor = (color: string) => {
    setDraft({ ...draft, colors: draft.colors.filter(c => c !== color) });
  };

  // Save/Cancel
  const handleSave = () => {
    setProject({ ...project, ...draft });
    setEditMode(false);
  };
  const handleCancel = () => {
    setDraft({
      name: project.name,
      description: project.description,
      colors: [...project.colors],
    });
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col py-8 px-6 min-h-screen sticky top-20 z-10 shadow-xl">
        <h2 className="text-2xl font-extrabold text-cyan-400 mb-8 text-center tracking-tight">Client Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="text-cyan-200 font-semibold bg-cyan-900/30 rounded-lg px-4 py-2 hover:bg-cyan-800/50 transition-colors">My Project</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 border-b border-gray-800 px-8 py-6 flex items-center justify-between shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400">Welcome back!</h1>
            <p className="text-gray-400 mt-1">Here is your project overview and status.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-cyan-700 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-cyan-400">C</div>
        </header>
        {/* Assigned Admin Info */}
        <section className="flex flex-col items-center justify-center py-8 px-4">
          <div className="bg-gray-900 shadow-xl rounded-2xl p-6 w-full max-w-2xl border border-gray-800 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Assigned Project Manager</h3>
              <div className="text-cyan-100 text-base mb-1">{mockAdmin.name}</div>
              <div className="text-gray-400 text-sm">Email: <span className="text-white">{mockAdmin.email}</span></div>
              <div className="text-gray-400 text-sm">Phone: <span className="text-white">{mockAdmin.phone}</span></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-cyan-800 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-cyan-400">{mockAdmin.name[0]}</div>
          </div>
        </section>
        {/* Project Info */}
        <section className="flex-1 flex flex-col items-center justify-center py-4 px-4">
          <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-gray-800 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-cyan-300 tracking-tight">Project Overview</h2>
              {!editMode ? (
                <button
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
              ) : null}
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={e => { e.preventDefault(); handleSave(); }}>
              <div>
                <label className="block text-cyan-200 font-medium mb-1">Project Name</label>
                {editMode ? (
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition mb-4"
                    value={draft.name}
                    onChange={e => setDraft({ ...draft, name: e.target.value })}
                    required
                  />
                ) : (
                  <span className="block text-white text-lg font-bold mb-4">{project.name}</span>
                )}
                <label className="block text-cyan-200 font-medium mb-1">Status</label>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-700 text-white font-semibold text-sm mb-4 shadow-md">{project.status}</span>
                <label className="block text-cyan-200 font-medium mb-1">Project Colors</label>
                {editMode ? (
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        className="w-12 h-12 rounded-lg border-2 border-gray-700 bg-gray-800 cursor-pointer focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                        type="color"
                        value={colorInput}
                        onChange={e => setColorInput(e.target.value)}
                        style={{ minWidth: '3rem' }}
                      />
                      <input
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                        type="text"
                        value={colorInput}
                        onChange={e => setColorInput(e.target.value)}
                        placeholder="#00bcd4 or color name"
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddColor(); } }}
                      />
                      <button
                        type="button"
                        onClick={handleAddColor}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50"
                        disabled={!colorInput.trim() || draft.colors.includes(colorInput.trim())}
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {draft.colors.map(color => (
                        <span key={color} className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-800 border border-gray-700 text-cyan-100 shadow" style={{ borderColor: color, color: color }}>
                          <span className="w-4 h-4 rounded-full inline-block mr-1" style={{ background: color, border: '1px solid #222' }}></span>
                          {color}
                          <button
                            type="button"
                            onClick={() => handleRemoveColor(color)}
                            className="ml-1 text-xs text-gray-400 hover:text-red-400 focus:outline-none"
                            aria-label={`Remove color ${color}`}
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-1 mb-4">
                    {project.colors.map(color => (
                      <span key={color} className="w-6 h-6 rounded-full border-2 border-cyan-400 shadow" style={{ background: color }} title={color}></span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-cyan-200 font-medium mb-1">Description</label>
                {editMode ? (
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition mb-4"
                    value={draft.description}
                    onChange={e => setDraft({ ...draft, description: e.target.value })}
                    rows={4}
                    required
                  />
                ) : (
                  <span className="block text-white mb-4">{project.description}</span>
                )}
                <label className="block text-cyan-200 font-medium mb-1 mt-4">Attachments</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.attachments.map(file => (
                    <a
                      key={file}
                      href={`/files/${file}`}
                      download
                      className="underline hover:text-cyan-400 transition-colors bg-gray-800 text-cyan-100 px-3 py-1 rounded-full shadow hover:bg-cyan-900/40"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file}
                    </a>
                  ))}
                </div>
              </div>
              {editMode && (
                <div className="col-span-2 flex justify-end gap-4 mt-8">
                  <button
                    type="button"
                    className="bg-gray-700 hover:bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-semibold transition"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Save
                  </button>
                </div>
              )}
            </form>
          </div>
          {/* Real-Time Chat Section (UI only) */}
          <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300 text-center tracking-tight">Project Chat</h2>
            <div className="h-56 overflow-y-auto bg-gray-800 rounded-lg p-4 mb-4 flex flex-col gap-3">
              {project.chat.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`px-4 py-2 rounded-lg text-sm shadow ${msg.from === 'client' ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-cyan-100'}`}>{msg.text}</span>
                  <span className="ml-2 text-xs text-gray-400 self-end">{msg.time}</span>
                </div>
              ))}
            </div>
            <form className="flex gap-2">
              <input
                className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                placeholder="Type a message..."
                disabled
              />
              <button
                type="button"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition opacity-60 cursor-not-allowed"
                disabled
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientDashboard; 