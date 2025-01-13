const express = require('express');
const mongoose = require('mongoose');
const { noteRouter } = require('./');

const app = express();
const port = process.env.PORT;

app.use('/api/notes', noteRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Notes listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Something went wrong!!!');
  });
