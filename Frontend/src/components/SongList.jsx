import React from "react";
import "./SongList.css";

const SongList = ({ songs, onEdit, onDelete }) => (
  <ul className="song-list">
    {songs.map((song) => (
      <li key={song._id} className="song-item">
        <div className="song-details">
          <div className="cover-placeholder">🎵</div>
          <div className="song-meta">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist || "Unknown Artist"}</span>
            <span className="song-album">{song.album || "Unknown Album"} • {song.year || "N/A"}</span>
          </div>
        </div>
        <div className="song-actions">
          <button className="edit-btn" onClick={() => onEdit(song)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(song._id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default SongList;
