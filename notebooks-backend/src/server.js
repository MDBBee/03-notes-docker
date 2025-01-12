const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.json({ message: 'Hello from notebooks!' }));

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
