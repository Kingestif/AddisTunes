import "./SongsSection.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, addSong, updateSong, deleteSong } from "../redux/songsSlice";
import SongList from "./SongList";

export const SongsSection = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleAdd = () => {
    const title = prompt("Enter song title:");
    if (title) dispatch(addSong({ title }));
  };

  const handleUpdate = (song) => {
    const newTitle = prompt("Edit song title:", song.title);
    if (newTitle) dispatch(updateSong({ id: song._id, data: { ...song, title: newTitle } }));
  };

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong(_id));
    }
  };

  return (
    <section className="songs-section">
      <div className="container">
        <h2 className="title">🎵 Your Songs</h2>
        <button className="add-btn" onClick={handleAdd}>+ Add Song</button>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <SongList className="song-list" songs={items} onEdit={handleUpdate} onDelete={handleDelete} />
        )}
      </div>
    </section>
  );
};