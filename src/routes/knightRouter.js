const express = require('express')
const router = express.Router()

const knightController = require('./../controllers/knightController.js');

const { nextPosition } = knightController;

router.get('/next-position/:currentPosition', nextPosition)

module.exports = router;
