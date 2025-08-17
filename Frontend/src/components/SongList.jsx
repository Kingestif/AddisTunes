import React from "react";

const SongList = ({ songs, onEdit, onDelete }) => (
  <ul className="song-list">
    {songs.map((song) => (
      <li key={song._id} className="song-item">
        <span className="song-title">{song.title}</span>
        <div className="song-actions">
          <button onClick={() => onEdit(song)}>Edit</button>
          <button onClick={() => onDelete(song._id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default SongList;