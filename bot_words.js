const line = require('@line/bot-sdk');
const config = require('./config');
// const dotenv = require('dotenv').config();
// create LINE SDK client
const client = new line.Client(config);
const fnWord = function (event) {
  let words = event.message.text;
  let tokens = event.replyToken;
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    // return Promise.resolve(null);
    return null;
  } else if (words) {
    // return client.replyMessage(tokens, {type: 'text', text: words});
    switch (words) {
      // case 1
      case "mrjane":
        return client.replyMessage(tokens, { type: 'text', text: words });
        break;
      // case 2
      case "hello":
        return client.replyMessage(tokens, { type: 'text', text: "มอนิ่งขาบบบเพิ้ลๆๆ" });
        break;
      // case 3
      case `m`:
        return client.replyMessage(tokens, { type: 'text', text: 'คนต้าวววชู้วววว' });
        break;
      // case 4
      case `ผอ`:
        return client.replyMessage(tokens, { type: 'text', text: 'พอดูรวมๆแล้วมีเสน่ห์ เหลือเกินนนนนน' });
        break;

      // case 5
      case `จัสติน`:
        return client.replyMessage(tokens, { type: 'text', text: 'แอบรอ' });
        break;
      // case 6
      case `ดีจ้า`:
        return client.replyMessage(tokens, { type: 'text', text: 'สวัสดีครับ' });
        break;
      // case 7
      case `ดีครับ`:
        return client.replyMessage(tokens, { type: 'text', text: 'สวัสดีครับ' });
        break;
      // case 8
      case `ดีค่ะ`:
        return client.replyMessage(tokens, { type: 'text', text: 'สวัสดีครับ' });
        break;
      // case 9
      case `สวัสดี`:
        return client.replyMessage(tokens, { type: 'text', text: 'สวัสดีครับ' });
        break;
      // case 10
      case `ครูเสก`:
        return client.replyMessage(tokens, { type: 'text', text: 'กระดกโชว์แนครับ' });
        break;
      // case 11
      case `จารบี`:
        return client.replyMessage(tokens, { type: 'text', text: 'มึงเคยฟังนิทานเรื่อง นกแสกบ่ !!!!' });
        break;
      // case 12
      case `ลัก`:
        return client.replyMessage(tokens, { type: 'text', text: 'นักย่างหมูในตำนาน' });
        break;
      // case 13
      case `วาทิต`:
        return client.replyMessage(tokens, { type: 'text', text: 'บ่ว่าง ย่างหมูอยู่' });
        break;
      // case 14
      case `พี่ออฟ`:
        return client.replyMessage(tokens, { type: 'text', text: 'หล่อเท่ห์ เต็ม 10 ไม่มีหัก' });
        break;
      // case 15
      case `command`:
        return client.replyMessage(tokens, { type: 'text', text: 
        'พี่ออฟ วาทิต ลัก จารบี ครูเสก จัสติน ผอ hello m เอ็มคนดี ปาล์มมี่ เจี๊ยบ ต้า จ่อย โอ้ ไก่ จิ๊บ' });
        break;
      // case 16
      case `เอ็มคนดี`:
        return client.replyMessage(tokens, { type: 'text', text: 'ดีไม่ห่างเหินนนนนนน' });
        break;
      // case 17
      case `ปาล์มมี่`:
        return client.replyMessage(tokens, { type: 'text', text: 'นส. นารีรัตน์ ดีมากกกกก' });
        break;
      // case 18
      case `เจี๊ยบ`:
        return client.replyMessage(tokens, { type: 'text', text: 'แบน' });
        break;
      // case 19
      case `ต้า`:
        return client.replyMessage(tokens, { type: 'text', text: 'อย่าว่าแต่ถูกหวยเลย แค่ถูกใจเทอสักครั้งก็ยังไม่เคย' });
        break;
      // case 20
      case `จ่อย`:
        return client.replyMessage(tokens, { type: 'text', text: 'เพื่อนรัก' });
        break;
      // case 21
      case `จิ๊บ`:
        return client.replyMessage(tokens, { type: 'text', text: 'แม่น้องปัจจัย' });
        break;
      // case 22
      case `โอ้`:
        return client.replyMessage(tokens, { type: 'text', text: 'มาริโอ้ เมาแล้ว' });
        break;
      // case 23
      case `ไก่`:
        return client.replyMessage(tokens, { type: 'text', text: 'เอริค ไบยี่' });
        break;
      // case 24
      case `มาแมะ`:
        return client.replyMessage(tokens, { type: 'text', text: 'หึ๋ยยย ใครจะไป ไกลก็ไกล' });
        break;
      // case 25
      case `ตาแซบแท้`:
        return client.replyMessage(tokens, { type: 'text', text: 'พอได้อยู่ มาเด้อๆ' });
        break;
      // case 26
      case `ใคร`:
        return client.replyMessage(tokens, { type: 'text', text: 'กูจะไปรู้กับมึงหรอ' });
        break;
      // case 27
      case `เฮ็ดงานแน`:
        return client.replyMessage(tokens, { type: 'text', text: 'มึงว่ากูดีดลูกแก้วอยู่ติ' });
        break;
      // case 28
      case `ค`:
        return client.replyMessage(tokens, { type: 'text', text: 'ควยไรล่ะ' });
        break;
      // case 29
      case `จักบาทสะบ้อ`:
        return client.replyMessage(tokens, { type: 'text', text: 'ก็มาดิค้าบบบบ' });
        break;
      // case 30
      case `ไผ`:
        return client.replyMessage(tokens, { type: 'text', text: 'มึงบ่รู้ กูจะรู้มั๊ยนี่ ?' });
        break;
      // case 31
      case `เบ้ย`:
        return client.replyMessage(tokens, { type: 'text', text: 'เบ้ยหาขี้ติ' });
        break;
      // case 32
      case `ขี้เสิน`:
        return client.replyMessage(tokens, { type: 'text', text: '@Mr.M คนต้าวววชู้ววววว' });
        break;
      // case 33
      case `M`:
        return client.replyMessage(tokens, { type: 'text', text: 'M = ผอ.' });
        break;
      // case 34
      case `@MR.watit🤡🦅 `:
        return client.replyMessage(tokens, { type: 'text', text: 'มาๆ มากินย่างหมู' });
        break;
      // case 35
      case '@Mr.M ':
        return client.replyMessage(tokens, { type: 'text', text: 'สนใจทักแชท' });
        break;
      // case 36
      case 'ต๊ะ':
        return client.replyMessage(tokens, { type: 'text', text: 'เน่า' });
        break;
      // case 37
      case 'เบิร์ด':
        return client.replyMessage(tokens, { type: 'text', text: 'อกหัก แต่บอกเมียไม่ได้' });
        break;
      // case 38
      case `เบ้ยย`:
        return client.replyMessage(tokens, { type: 'text', text: 'เบ้ยหาขี้ติ' });
        break;
      // case 39
      case `เบ้ยยย`:
        return client.replyMessage(tokens, { type: 'text', text: 'เบ้ยหาขี้ติ' });
        break;

      default:
        return Promise.resolve(null);
    }
  }
  return Promise.resolve(null);
}

module.exports = fnWord;