const express = require('express');
const hbs = require('hbs');
const fs=require('fs');
var app = express();

const port=process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Welcome To The'
  });
});
app.get('/initiate', (req, res) => {
  res.render('initiate.hbs', {
    pageTitle: 'Initiate Transaction',
    accountNumber: 1234566789,
    accountHolder: 'Sudhanshu Ranjan',
    ifscCode: 'TOU123456',
    branch: 'India',
    balance: 10000
  });
});
app.get('/cancel', (req, res) => {
  res.render('cancel.hbs', {
    pageTitle: 'Cancel Transaction',
    accountNumber: 1234566789,
    accountHolder: 'Sudhanshu Ranjan',
    ifscCode: 'TOU123456',
    branch: 'India',
    balance: 10000
  });
});
app.get('/confirm', (req, res) => {
  res.render('confirm.hbs', {
    pageTitle: 'Confirm Transaction',
    accountNumber: 1234566789,
    accountHolder: 'Sudhanshu Ranjan',
    ifscCode: 'TOU123456',
    branch: 'India',
    balance: 10000
  });
});

app.get('/update', (req, res) => {
  res.render('update.hbs', {
    pageTitle: 'Update Transaction',
    accountNumber: 1234566789,
    accountHolder: 'Sudhanshu Ranjan',
    ifscCode: 'TOU123456',
    branch: 'India',
    balance: 10000
  });
});

// When Non Existing Url passed
app.get('/*', (req, res) => {
  res.send({
    errorMessage: 'This Page Is Not Availabe'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
