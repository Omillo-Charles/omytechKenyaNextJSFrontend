import React, { useState } from 'react';

const PRESET_COLORS = [
  '#2563eb', // blue-600
  '#22d3ee', // cyan-400
  '#f59e42', // orange-400
  '#f43f5e', // rose-500
  '#a21caf', // purple-800
  '#16a34a', // green-600
  '#fbbf24', // yellow-400
  '#e11d48', // red-600
  '#64748b', // slate-500
  '#fff',    // white
  '#000',    // black
];

const CreateProjectPage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    description: '',
    budget: '',
    deadline: '',
    colors: [] as string[],
    files: [] as File[],
  });
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [customColor, setCustomColor] = useState('#000000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddColor = (color: string) => {
    if (!form.colors.includes(color)) {
      setForm({ ...form, colors: [...form.colors, color] });
    }
  };

  const handleRemoveColor = (color: string) => {
    setForm({ ...form, colors: form.colors.filter(c => c !== color) });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, files: Array.from(e.target.files) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission logic will go here
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-8 px-2">
      <div className="w-full max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="name">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter project name"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9\-\+\s\(\)]{7,}"
              className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your phone number"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Describe your project"
              rows={4}
            />
          </div>
          {/* Budget and Deadline */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-gray-200 mb-1" htmlFor="budget">Budget <span className="text-xs text-gray-400">(in US Dollars)</span></label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  min="0"
                  className="w-full pl-7 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="e.g. 1000"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-200 mb-1" htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
          </div>
          {/* Color Picker - Swatch Grid */}
          <div>
            <label className="block text-gray-200 mb-1">Project Colors</label>
            <div className="grid grid-cols-6 gap-2 mb-3">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`w-8 h-8 rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${form.colors.includes(color) ? 'border-cyan-500 ring-2 ring-cyan-500' : 'border-gray-700'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleAddColor(color)}
                  aria-label={`Add color ${color}`}
                />
              ))}
              <button
                type="button"
                className="w-8 h-8 rounded-full border-2 border-dashed border-cyan-500 flex items-center justify-center text-cyan-400 bg-gray-800 hover:bg-gray-700 transition-colors"
                onClick={() => setShowCustomPicker((v) => !v)}
                aria-label="Add custom color"
              >
                +
              </button>
            </div>
            {showCustomPicker && (
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="color"
                  value={customColor}
                  onChange={e => setCustomColor(e.target.value)}
                  className="w-8 h-8 border-none bg-transparent cursor-pointer"
                  aria-label="Pick custom color"
                />
                <button
                  type="button"
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded hover:opacity-90 text-sm font-semibold shadow transition-colors"
                  onClick={() => { handleAddColor(customColor); setShowCustomPicker(false); }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="px-2 py-1 text-gray-400 hover:text-red-400 text-sm"
                  onClick={() => setShowCustomPicker(false)}
                >
                  Cancel
                </button>
              </div>
            )}
            {form.colors.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.colors.map((color) => (
                  <div key={color} className="flex items-center gap-1 bg-gray-800 rounded-full px-3 py-1 border border-gray-700">
                    <span className="w-4 h-4 rounded-full inline-block mr-1" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-200">{color}</span>
                    <button
                      type="button"
                      className="ml-1 text-red-400 hover:text-red-600 text-lg px-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                      title="Remove color"
                      aria-label="Remove color"
                      onClick={() => handleRemoveColor(color)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* File Upload */}
          <div>
            <label className="block text-gray-200 mb-1">Upload Files</label>
            <label htmlFor="files" className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-cyan-500 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors text-cyan-300 font-semibold mb-2">
              <svg className="w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"></path></svg>
              <span>Click or drag files to upload</span>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {form.files.length > 0 && (
              <ul className="mt-2 text-sm text-gray-300 list-none p-0">
                {form.files.map((file, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-1 border-b border-gray-700 last:border-b-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 10-2.828-2.828z"></path></svg>
                    <span className="truncate">{file.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold transition-all hover:opacity-90 shadow-lg"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectPage; 