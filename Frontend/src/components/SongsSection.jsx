import "./SongsSection.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, addSong, updateSong, deleteSong } from "../redux/songsSlice";
import SongList from "./SongList";
import EditSongModal from "./EditSongModal";
import DeleteConfirmModal from "./DeleteConfirmModal";


export const SongsSection = () => {
  const [editingSong, setEditingSong] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
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
    setEditingSong(song);
  };

  const handleSaveEdit = (updatedSong) => {
    dispatch(updateSong({ id: updatedSong._id, data: updatedSong }));
    setEditingSong(null);
  };

    const handleDelete = (_id) => {
    setDeleteId(_id);
  };

  const confirmDelete = () => {
    dispatch(deleteSong(deleteId));
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
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
        {editingSong && (
          <EditSongModal
            song={editingSong}
            onClose={() => setEditingSong(null)}
            onSave={handleSaveEdit}
          />
        )}
        <DeleteConfirmModal
          open={!!deleteId}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </div>
    </section>
  );
};