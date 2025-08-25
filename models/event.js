const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the event'],
    maxlength: 100,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the event'],
    maxlength: 1000
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for the event']
  },
  time: {
    type: String,
    required: [true, 'Please provide a time for the event']
  },
  location: {
    type: String,
    required: [true, 'Please provide a location for the event'],
    maxlength: 200
  },
  organizerName: {
    type: String,
    required: [true, 'Please provide an organizer name'],
    maxlength: 50
  },
  eventBanner: {
    type: String,
    default: ''
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
