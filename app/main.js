const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();
//var app = express.createServer();

app.use(bodyParser.json());
app.use(cors());

//app.use(express.staticProvider(__dirname + '/app/template'));

//app.get('/', (req, res) => res.render('index.html'));

app.listen(port, () => console.log(`Server started on port ${port}!`));