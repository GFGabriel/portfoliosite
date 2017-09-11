const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('*', function(req, res, next) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.listen(port, function(){
    console.log('Personal site listening on port', port)
});
