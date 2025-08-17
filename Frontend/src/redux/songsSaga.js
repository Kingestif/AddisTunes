import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchSongs, fetchSongsSuccess, fetchSongsFailure } from "./songsSlice";

function* fetchSongsSaga() {
  try {
    const res = yield call(axios.get, `${process.env.API_BASE_URL}`);
    yield put(fetchSongsSuccess(res.data.data.songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export default function* songsSaga() {
  yield takeLatest(fetchSongs.type, fetchSongsSaga);
}