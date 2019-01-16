const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const { publicVapidKey, privateVapidKey } = require('./keys');

//Init app
const app = express();

//Set static path
app.use(express.static(path.join(__dirname, "client")));

//BodyParser middleware
app.use(bodyParser.json());

webpush.setVapidDetails('mailto: sumit@binarynumbers.io', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe', (req, res) => {

  // Get pushSubscription obj
  const subscription = req.body

  //Send 201(means resources created successfully)
  res.status(201).json({});

  //Create Payload
  const payload = JSON.stringify({ title: 'Push Notification from Nodejs!' })

  //Pass obj in sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.log(err));
});

//Create port
const port = 5000;

//Listen to port
app.listen(port, () => console.log(`Server Started on port ${port}`));