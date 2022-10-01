const line = require('@line/bot-sdk');
const config = require('./config');
const axios = require('axios');
const coinName = require('./coins.json');

// create LINE SDK client
const client = new line.Client(config);

const handlePrice = async function (event) {
  let tokens = event.replyToken;
  let words = event.message.text;
  let targetCurrency = words.slice(1, words.length);
  let targetId = await coinName.filter( (idx) => idx.symbol === targetCurrency);
  console.log(targetId)
  // ignore non-text-message event
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
    // if (targetId)
  } else if (targetId.length === 0) {
    return client.replyMessage(tokens,{type: 'text', text: 'Invalid token symbol'})
  } else {
    try {
      console.log(targetId[0].id)
      let url = `https://api.coingecko.com/api/v3/simple/price?ids=${targetId[0].id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      
      let response = await axios.get(url);
      // console.log(test)
      let price = Object.values(response.data);
      let targetPrice = '$' + ' ' + price[0].usd;
      let marketcap = '$' + ' ' + (parseFloat(price[0].usd_market_cap.toFixed(2)).toLocaleString('en'));
      let volume = '$' + ' ' + parseFloat(price[0].usd_24h_vol.toFixed(2)).toLocaleString('en');
      let percentChange = price[0].usd_24h_change.toFixed(2) + ' ' + '%';
      console.log(price)
      
      return client.replyMessage(tokens, {
        type: 'text', 
        text: ` Crypto Price Bot 
        ${targetId[0].id} 
        ${targetPrice}
        Mcap: ${marketcap} 
        Vol(24hr): ${volume} 
        Change(24hr): ${percentChange}`
      })
      
     
      
    } catch (err) {
      console.error(err)
      return Promise.resolve(null);
    }
  }
}

module.exports =  handlePrice;
