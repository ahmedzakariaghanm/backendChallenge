var express = require('express');
var app = express();
var port = 5000;
var http = require('http');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var routes = require('./routes');
var mongoose    = require('mongoose');
mongoose.connect("mongodb://localhost/inovola", { useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex: true,useFindAndModify: false});
 
const connection = mongoose.connection;
 
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});
http.createServer(app).listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
