const express = require('express');
const router = express.Router();
const { createEvent, getEvents, joinEvent } = require('../Controllers/eventController');
const ensureAuthenticated = require('../middlewares/authMiddleware');

router.post('/', ensureAuthenticated, createEvent);

router.get('/', getEvents);

router.post('/:id/join', ensureAuthenticated, joinEvent);

module.exports = router;
