import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;

export const getAllSongs = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data.data.songs;
};

export const addSong = async (song) => {
  const res = await axios.post(`${API_BASE_URL}`, song);
  return res.data.data.song;
};

export const updateSong = async (id, song) => {
  const res = await axios.put(`${API_BASE_URL}${id}`, song);
  return res.data.data.song;
};

export const deleteSong = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}${id}`);
  return res.data.data.song;
};
