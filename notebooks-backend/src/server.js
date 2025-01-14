const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { notebookRouter } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/api/notebooks', notebookRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Notebooks listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Something went wrong!!!');
  });
