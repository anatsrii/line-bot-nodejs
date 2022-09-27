const line = require('@line/bot-sdk');
const config = require('./config');
const axios = require('axios');
const coinName = require('./coins.json');

// create LINE SDK client
const client = new line.Client(config);

const handlePrice = async function (event) {
  let tokens = event.replyToken;
  // let currency = '/' + event.message.text;
  // ignore non-text-message event
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
    // if (currency)
  } else  {
    try {
      let words = event.message.text;
      let targetCurrency = words.slice(1, words.length);
      console.log('function handlePrice',targetCurrency)
      let url = `https://api.coingecko.com/api/v3/simple/price?ids=${targetCurrency}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      
      // let arr = []
      let response = await axios.get(url);
      // console.log(test)
      let price = Object.values(response.data);
      let priceName = Object.keys(response.data);
      console.log(price)
      
      return client.replyMessage(tokens, {
        type: 'text', text: `${priceName}`
      })
      
    } catch (err) {
      console.error(err)
      return Promise.resolve(null);
    }
    
  }
}

module.exports =  handlePrice;
