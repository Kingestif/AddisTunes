import React from "react";

const SongList = ({ songs, onEdit, onDelete }) => (
  <ul>
    {songs && songs.length > 0 ? (
      songs.map((song) => (
        <li key={song._id}>
          {song.title}
          <button onClick={() => onEdit(song)}>Edit</button>
          <button onClick={() => onDelete(song._id)}>Delete</button>
        </li>
      ))
    ) : (
      <li>No songs found.</li>
    )}
  </ul>
);

export default SongList;
