import React, { useState, useEffect } from 'react';
import { account } from '../utils/appwrite';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [colorInput, setColorInput] = useState('#00bcd4');
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Autofill email from Appwrite
    account.get()
      .then(u => setEmail(u.email))
      .catch(() => setEmail(''));
  }, []);

  const handleAddColor = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const color = colorInput.trim();
    if (color && !colors.includes(color)) {
      setColors([...colors, color]);
      setColorInput('#00bcd4');
    }
  };

  const handleRemoveColor = (color: string) => {
    setColors(colors.filter(c => c !== color));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      // For now, just log the data. Replace with Appwrite DB logic later.
      console.log('Project Created:', {
        projectName,
        description,
        files,
        email,
        phone,
        colors,
      });
      setSuccess(true);
      setProjectName('');
      setDescription('');
      setFiles(null);
      setPhone('');
      setColors([]);
      setColorInput('#00bcd4');
    } catch (err: any) {
      setError('Failed to create project.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20">
      <div className="bg-gray-900 shadow-2xl rounded-xl p-10 w-full max-w-lg border border-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-cyan-400 text-center">Create Project</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label htmlFor="projectName" className="block text-cyan-200 font-medium mb-1">Project Name</label>
            <input
              id="projectName"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
              placeholder="Enter project name"
              type="text"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-cyan-200 font-medium mb-1">Description</label>
            <textarea
              id="description"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
              placeholder="Describe your project"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              disabled={loading}
              rows={4}
            />
          </div>
          {/* Upload Files */}
          <div>
            <label htmlFor="files" className="block text-cyan-200 font-medium mb-1">Upload Files</label>
            <input
              id="files"
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition file:bg-cyan-500 file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:mr-4"
              type="file"
              multiple
              onChange={e => setFiles(e.target.files)}
              required
              disabled={loading}
            />
          </div>
          {/* Project Colors */}
          <div>
            <label className="block text-cyan-200 font-medium mb-1">Project Colors</label>
            <div className="flex items-center gap-4 mb-2">
              <input
                className="w-12 h-12 rounded-lg border-2 border-gray-700 bg-gray-800 cursor-pointer focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                type="color"
                value={colorInput}
                onChange={e => setColorInput(e.target.value)}
                disabled={loading}
                style={{ minWidth: '3rem' }}
              />
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
                type="text"
                value={colorInput}
                onChange={e => setColorInput(e.target.value)}
                placeholder="#00bcd4 or color name"
                disabled={loading}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddColor(); } }}
              />
              <button
                type="button"
                onClick={handleAddColor}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50"
                disabled={loading || !colorInput.trim() || colors.includes(colorInput.trim())}
              >
                Add
              </button>
            </div>
            {/* Show selected colors as chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color) => (
                <span
                  key={color}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-800 border border-gray-700 text-cyan-100 shadow"
                  style={{ borderColor: color, color: color }}
                >
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
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-cyan-200 font-medium mb-1">Email</label>
            <input
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-cyan-300 cursor-not-allowed"
              placeholder="Email"
              type="email"
              value={email}
              readOnly
              required
              disabled
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-cyan-200 font-medium mb-1">Phone Number</label>
            <input
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 transition"
              placeholder="Enter your phone number"
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          {success && <div className="text-green-400 text-sm text-center">Project created!</div>}
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-200 mt-2"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Creating...' : 'Submit Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject; 