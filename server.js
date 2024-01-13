const line = require('@line/bot-sdk');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const handleWords = require('./bot_words.js');
const handlePrice = require('./bot_price')
const stickerHandler = require('./bot_sticker');
const handlerImage = require('./bot_image');


// create Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//register line

app.get('/', () => (req, res) => {
  res.send("Hello line chatbot").status(200)
})

//Loop events เพื่อส่งให้แต่ละ Function ไปทำงานต่อ
// app.post('/', line.middleware(config), async (req, res) => {
//   // รับ req.body
//   let events = req.body.events;

//   console.log('sliceWord =', events[0])
//   // send to stickerhandler (ดัก sticker & image ) ถ้าจะขยายค่อยมา filter เพิ่มเติม
//   if (events[0].message.type === 'sticker') {
//     let result = await events.map(stickerHandler);
//     try {
//       res.json(result)
//     } catch (err) {
//       console.error(err)
//       res.status(500).end();
//     }
//     // send to handlerPrice 
//   } else if (events[0].message.type === 'image') {
//     let result = await events.map(handlerImage);
//     try {
//       res.json(result)
//     } catch (err) {
//       console.error(err);
//       res.status(500).end();
//     }
//   } else if (events[0].message.text.slice(0, 1) === '/') {
//     let result = await events.map(handlePrice);
//     try {
//       res.json(result)
//     } catch (err) {
//       console.error(err)
//       res.status(500).end();
//     }
//     // send to handler
//   } else if (events) {
//     let result = await events.map(handleWords);
//     try {
//       res.json(result)
//     } catch (err) {
//       console.error(err);
//       res.status(500).end();
//     }
//   }
//   res.status(500).end();
// })

// listen on port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

