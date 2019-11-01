const express = require('express');
const router = express.Router();

const {Celebrity} = require('../controllers');

router.get('/', Celebrity);

module.exports = {router}