const dotenv = require('dotenv').config();

// create LINE SDK config from env variables
module.exports = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}