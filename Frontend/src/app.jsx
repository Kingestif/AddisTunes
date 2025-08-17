import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "./redux/songsSlice";
import SongList from "./components/SongList";

const App = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div>
      <h1>Songs</h1>
      {loading ? <p>Loading...</p> : <SongList songs={items} />}
    </div>
  );
};

export default App;
