const express = require("express");

const app = express();


app.listen(7000, () => {
    console.log("Express server is running!");
  })


app.use(express.json());

// GET request
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

// POST request
app.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'Received POST request', data });
});

// PUT request
app.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.json({ message: `Updated data with ID ${id}`, updatedData });
});

// DELETE request
app.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Deleted data with ID ${id}` });
});


