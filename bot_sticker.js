const line = require('@line/bot-sdk');
const config = require('./config');

// create LINE SDK client
const client = new line.Client(config);

const stickerHandler = function (event) {
  const token = event.replyToken;
  // Handler sticker
  return client.replyMessage(token, {type: 'sticker', packageId: 6359, stickerId: 11069867});
}

module.exports = stickerHandler;