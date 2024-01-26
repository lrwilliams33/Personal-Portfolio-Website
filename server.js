// set up express
const express = require('express');
const app = express();
const port = 3500;

// serve the files in public
app.use(express.static('public'));

// Parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});