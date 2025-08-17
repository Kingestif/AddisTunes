import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  fetchSongs, addSong, updateSong, deleteSong 
} from "./redux/songsSlice";
import SongList from "./components/SongList";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  // Add a new song
  const handleAdd = () => {
    const title = prompt("Enter song title:");
    if (title) dispatch(addSong({ title }));
  };

  // Update an existing song
  const handleUpdate = (song) => {
    const newTitle = prompt("Edit song title:", song.title);
    if (newTitle) dispatch(updateSong({ id: song._id, data: { ...song, title: newTitle } }));
  };

  // Delete a song
  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong(_id));
    }
  };

  return (
    <div>
      <Header/>
      <HeroSection/>
      {/* <h1>Songs</h1>
      <button onClick={handleAdd}>Add Song</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SongList 
          songs={items} 
          onEdit={handleUpdate} 
          onDelete={handleDelete} 
        />
      )} */}
      <Footer/>
    </div>
  );
};

export default App;
