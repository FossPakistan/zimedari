const mongoose = require('mongoose');

const { Schema } = mongoose;

const issueSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  text: { type: String },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
}, { versionKey: false });

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
