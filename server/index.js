const express = require('express')
const path = require('path')
const app = express()
const request = require('request');

app.use(express.static(path.join(__dirname, '../build')))

app.get('/ping', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/weather', (req, res) => {
  // const name = req.query.name || 'World';
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

  //get location
  var long;
  var lat;
  var weatherRes;
  // navigator.geolocation.getCurrentPosition(success, fail);
  // const success = (position) => {
  lat = 40.74300; //position.coords.latitude;
  long = -74.03310; //position.coords.longitude;
  console.log("Latitude: " + lat);
  console.log("Longitude: " + long);
  console.log("https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long);
  request("https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long, function(error, response, body) {
    console.log(body);
    weatherRes = body;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({weather: `${weatherRes}`}));

  });
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({weather: `${weatherRes}`}));



    //http request
  //   var xhr = new XMLHttpRequest();
  //   console.log("https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long);
  //   xhr.open('GET', "https://api.darksky.net/forecast/ce47d0cfdec16677f87ec01676cf27fb/" + lat + "," + long, true);
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === xhr.LOADING) {

  //       console.log("LOADING");
  //     }
  //     else if (xhr.readyState === xhr.DONE) {
  //       if (xhr.status === 200) {
  //         console.log("DONE");
  //         console.log(JSON.parse(xhr.responseText));
  //         weatherRes = JSON.parse(xhr.responseText);
  //         console.log("repsonse: " + JSON.stringify(weatherRes));
  //       }
  //     }
  //     else {
  //       console.log(`XHR Failed with status ${xhr.status}: ${xhr.statusText}`);
  //     }
  //   };
  //   xhr.send();
  // // }
  // const fail = () => {
  //   console.log("oopsie woopsie. can't get longitude and latitude.")
  // }

  //console.log(JSON.parse(xhr.responseText));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.resolve('../build/index.html'));
})

app.listen(8081)
console.log("listening on port 8081")