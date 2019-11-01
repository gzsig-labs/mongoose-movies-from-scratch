const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const {Celebrity} = require('../controllers');

console.log(Celebrity.CelebrityIndexPost)

router.get('/', Celebrity.CelebrityIndex);
router.post('/', Celebrity.CelebrityIndexPost);
router.get('/celebrity/:id', Celebrity.CelebrityShow)
router.get('/celebrities/new', Celebrity.CelebrityNew)

module.exports = {router}