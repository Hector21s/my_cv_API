const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by Hector21s');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});
app.get('/3a1', (req, res, next) => {
	res.sendfile("assets/3a_test1.json");
});

app.get('/3a2', (req, res, next) => {
	res.sendfile("assets/3a_test2.json");
});

app.get('/3a3', (req, res, next) => {
	res.sendfile("assets/3a_test3.json");
});

app.get('/3a4', (req, res, next) => {
	res.sendfile("assets/3a_test4.json");
});
app.listen(port,  () => 
	console.log('listening on port ' + port
));
