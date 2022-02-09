const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.KICHU, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('https://i.imgur.com/2V88P25.jpeg'), mimetype: Mimetype.png, caption: `~*«------Links------»*~
 
*owner number: wa.me/918714183251*

*owner number: wa.me/919961857267*
   
*owner number: wa.me/918075379950*


*whatsapp group : https://chat.whatsapp.com/GgHXTY2Wo4rBhZGn8W2r9b*


*githublink       _https://github.com/Itsme-soman/KICHU-SER_*    
`}) 

})); 
