const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
})
