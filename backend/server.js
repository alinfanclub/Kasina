const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,  '../frontend/dist')));
app.get('*', (req, res) => {
res.sendFile( path.join( __dirname, '../frontend/dist/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})