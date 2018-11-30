// server.js
  // SERVER-SIDE JAVASCRIPT
  const express = require('express');
  const app = express();

  app.use(express.static('public'))

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get('/', (req, res) => {
    // console.log(req);
    // console.log('///////////////////////////////////////////////////////////////////////////');
    // console.log(res);
    // res.send('Hello World!');
    res.sendFile('views/index.html', { root: __dirname });
  });

// Connecting to PORT 3000 to have the app go to PORT 3000 on server load
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));

// server.js
  const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ]
// app.get('/', (req, res) => res.send('Hello World!'))

// Getting all albums in API and getting a response in json
app.get('/api/albums', (req, res) => {
  res.json(albums)
})

