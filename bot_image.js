const line = require('@line/bot-sdk');
const config = require('./config');

// create LINE SDK client
const client = new line.Client(config);

// handlerImage Function
const handlerImage = function (event) {
  // handler image here
  // const token = event.replyToken;
  // return client.replyMessage(token, {type: 'image', originalContentUrl: 'https://i.imgur.com/7QcnKPWl.jpg', previewImageUrl: 'https://i.imgur.com/7QcnKPWl.jpg'})
  return Promise.resolve(null);
}

module.exports = handlerImage;