'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const StampSchema = new mongoose.Schema({
    flag: { type: String },
    date: { type: String },
    name: { type: String },
    href: { type: String },
    from: { type: String },
    pics: [{ type: String }],
    info: [],
    detail: [[{ type: String }, { type: String }]],
    intro: [{ type: String }],
    html: { type: Object },
  }, {
    collection: 'stamp',
  });

  StampSchema.index({ name: 1 });
  StampSchema.index({ from: 1 });
  StampSchema.index({ date: -1 });

  return mongoose.model('Stamp', StampSchema);
};