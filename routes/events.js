const express = require('express');
const {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router
  .route('/')
  .get(getEvents)
  .post(protect, upload.single('eventBanner'), createEvent);

router
  .route('/:id')
  .get(getEvent)
  .put(protect, upload.single('eventBanner'), updateEvent)
  .delete(protect, deleteEvent);

module.exports = router;
