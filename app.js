const express = require('express');

const app = express();

/*
const mongoose = require('mongoose');


// This is used to connect to MongoDB.
const dbURI = 'mongodb+srv://jaredsa:<>@survey-cluster.mmaeq.mongodb.net/pizza-survey?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewURLParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected successfully to MongoDB'))
    .catch((err) => console.log(err));
*/

// view engine
app.set('view engine', 'html');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Homepage</p>');
    res.sendFile('./views/index.html', {root: __dirname});
   // res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    //res.send('<p>About</p>');
    res.sendFile('./views/about.html', {root: __dirname});
    //res.render('about', {title: 'About'});
});

app.get('/survey', (req, res) => {
    res.sendFile('./views/survey.html', {root: __dirname});
    //res.render('survey', {title: 'Pizza Survey'});
});

app.get('/thanks', (req, res) => {
    res.sendFile('./views/thanks.html', {root: __dirname});
});

app.post('/register', (req, res) => {
    res.redirect('/thanks')
});

/*
// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
*/

// 404 Pages
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
    //res.status(404).render('404', {title: '404'});
});

// Static content
//app.use(express.static("images"));
