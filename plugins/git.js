const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/2V88P25.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Github* *(setup)* : *https://github.com/Itsme-soman/KICHU-SER*

*Whatsapp group : https://chat.whatsapp.com/IGF65nLxwPeITjnZlUbnr4*

*Owner number : wa.me/918075379950*

*Owner number : wa.me/918714183251*

*Owner number : wa.me/2349053311892*

*Supporter number : wa.me/919633927168*

*Audio commands : https://github.com/Itsme-soman/medias/tree/master/uploads*

*Sticker commands : https://github.com/Itsme-soman/medias/tree/master/stickers*
`}) 

}));
