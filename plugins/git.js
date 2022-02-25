const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/2V88P25.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Github* *(setup)* : *https://github.com/Itsme-soman/KICHU-SER*

*Whatsapp group* : *https://chat.whatsapp.com/GgHXTY2Wo4rBhZGn8W2r9b*

*Audio comnds* : *https://github.com/Itsme-soman/medias/tree/master/uploads*

*Sticker cmnds* : *https://github.com/Itsme-soman/medias/tree/master/stickers*
`}) 

}));
