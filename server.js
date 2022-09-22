const line = require('@line/bot-sdk');
const express = require('express');
const dotenv = require('dotenv').config();


// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), async (req, res) => {
 try {
   const events = req.body.events;
   console.log(`events = ${events}`);
   res.status(200).send("OK");
 } catch (error) {
    res.status(500).end();
 }
});

// event handler
function handleEvent(event) {
  // if (event.type !== 'message' || event.message.type !== 'text') {
  //   // ignore non-text-message event
  //   return Promise.resolve(null);
  // }

  // // create a echoing text message
  // const echo = { type: 'text', text: event.message.text };

  // // use reply API
  // return client.replyMessage(event.replyToken, echo);
  console.log(event);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});