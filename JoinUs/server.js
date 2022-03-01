const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>This is from SERVER.js: on 3000</h1>')
});

app.post('/api', (req, res) => {
  const email = req.body.email;

  console.log(email)

  res.json({ response: email });
})

app.listen(3000, () => {
  console.log('SERVER.js listening on 3000');
})