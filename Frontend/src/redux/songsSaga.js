import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongs, fetchSongsSuccess, fetchSongsFailure,
  addSong, addSongSuccess,
  updateSong, updateSongSuccess,
  deleteSong, deleteSongSuccess
} from "./songsSlice";

const API = process.env.API_BASE_URL;

// FETCH
function* fetchSongsSaga() {
  try {
    const res = yield call(axios.get, `${API}/?page=${2}&limit=${10}`);
    yield put(fetchSongsSuccess(res.data.data.songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// ADD
function* addSongSaga(action) {
  try {
    const res = yield call(axios.post, `${API}`, action.payload);
    yield put(addSongSuccess(res.data.data.song));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// UPDATE
function* updateSongSaga(action) {
  try {
    const res = yield call(axios.patch, `${API}/${action.payload.id}`, action.payload.data);
    yield put(updateSongSuccess(res.data.data.song));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// DELETE
function* deleteSongSaga(action) {
  try {
    yield call(axios.delete, `${API}/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export default function* songsSaga() {
  yield takeLatest(fetchSongs.type, fetchSongsSaga);
  yield takeLatest(addSong.type, addSongSaga);
  yield takeLatest(updateSong.type, updateSongSaga);
  yield takeLatest(deleteSong.type, deleteSongSaga);
}