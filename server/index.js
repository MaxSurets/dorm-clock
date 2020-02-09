const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../build')))

app.get('/ping', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile( path.resolve('../build/index.html') );
})

app.listen(8081)
console.log("listening on port 8081")