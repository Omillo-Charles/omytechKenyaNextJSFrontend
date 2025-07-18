import React, { useState } from 'react';

const CreateProjectPage = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    budget: '',
    deadline: '',
    colors: ['#000000'],
    files: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...form.colors];
    newColors[index] = value;
    setForm({ ...form, colors: newColors });
  };

  const addColor = () => {
    setForm({ ...form, colors: [...form.colors, '#000000'] });
  };

  const removeColor = (index: number) => {
    const newColors = form.colors.filter((_, i) => i !== index);
    setForm({ ...form, colors: newColors });
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project name"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project"
              rows={4}
            />
          </div>
          {/* Budget and Deadline */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-gray-700 mb-1" htmlFor="budget">Budget</label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                min="0"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 1000"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1" htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Color Picker */}
          <div>
            <label className="block text-gray-700 mb-1">Project Colors</label>
            <div className="flex flex-wrap gap-2 items-center">
              {form.colors.map((color, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <input
                    type="color"
                    value={color}
                    onChange={e => handleColorChange(idx, e.target.value)}
                    className="w-8 h-8 border-none bg-transparent"
                  />
                  {form.colors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeColor(idx)}
                      className="text-red-500 hover:text-red-700 text-lg px-1"
                      aria-label="Remove color"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addColor}
                className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
              >
                + Add Color
              </button>
            </div>
          </div>
          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="files">Upload Files</label>
            <input
              type="file"
              id="files"
              name="files"
              multiple
              onChange={handleFileChange}
              className="w-full"
            />
            {form.files.length > 0 && (
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                {form.files.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectPage; 