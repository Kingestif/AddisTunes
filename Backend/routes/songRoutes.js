const express = require('express');
const router = express.Router();

const { getAllSongs, createSong, getSongById, updateSong, deleteSong,} = require('../controllers/songController');

router.route('/').get(getAllSongs).post(createSong);

router.route('/:id').get(getSongById).patch(updateSong).delete(deleteSong);

module.exports = router;