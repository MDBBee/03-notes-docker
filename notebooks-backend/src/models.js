const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;

const NotebookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: null,
    },
  },
  { timestamps: true }
);

const NoteBook = mongoose.model('Notebook', NotebookSchema);

module.exports = {
  NoteBook,
};
