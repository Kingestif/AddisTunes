import React, { useState } from "react";
import "./EditSongModal.css"; // <-- import CSS

const EditSongModal = ({ song, onClose, onSave }) => {
  const [form, setForm] = useState(song);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  if (!song) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit Song</h3>
        <form onSubmit={handleSubmit}>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
          <input name="artist" value={form.artist} onChange={handleChange} placeholder="Artist" />
          <input name="album" value={form.album} onChange={handleChange} placeholder="Album" />
          <input name="year" value={form.year} onChange={handleChange} placeholder="Year" />
          <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" />
          <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" />
          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSongModal;
