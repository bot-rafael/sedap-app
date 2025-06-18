import { useState } from 'react';

const GenericForm = ({ isVisible, onClose, onSubmit, fields, initialData = {} }) => {
  const [formData, setFormData] = useState(() => {
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.name] = initialData[field.name] || '';
    });
    return initialState;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Kirim data form ke parent
    onClose(); // Tutup form setelah submit
  };

  if (!isVisible) return null; // Jangan tampilkan form jika isVisible false

  return (
    <form onSubmit={handleFormSubmit} className="p-5 mt-8 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Item</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-600">{field.label}</label>
            {field.type === 'select' ? (
              <select name={field.name} value={formData[field.name]} onChange={handleInputChange} className="w-full p-2 border rounded-lg">
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleInputChange} className="w-full p-2 border rounded-lg" required={field.required} />
            )}
          </div>
        ))}
        <div className="flex space-x-4 mt-4">
          <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Cancel
          </button>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Save Item
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenericForm;
