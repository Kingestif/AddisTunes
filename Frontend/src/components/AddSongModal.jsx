import React, { useState } from "react";
import "./AddSongModal.css";

const AddSongModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    artist: "",
    album: "",
    year: "",
    genre: "",
    duration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      title: "",
      artist: "",
      album: "",
      year: "",
      genre: "",
      duration: "",
    });
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title">Add Song</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            name="artist"
            value={form.artist}
            onChange={handleChange}
            placeholder="Artist"
            required
          />
          <input
            name="album"
            value={form.album}
            onChange={handleChange}
            placeholder="Album"
            required
          />
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="Year"
            required
          />
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Genre"
            required
          />
          <input
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Duration"
            required
          />

          <div className="modal-actions">
            <button type="submit" className="btn-primary">
              Add Song
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSongModal;
