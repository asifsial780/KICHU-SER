/* Copyright (C) 2021  KICHUSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Kichuser - Kichu
Wa.me/17623393587
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'git', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Oᴡɴᴇʀ ɴᴜᴍʙᴇʀs', description: "シ︎Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Kɪᴄʜᴜ Sᴇʀ Aɴᴅ Hᴇʟᴘᴇʀs Nᴜᴍʙᴇʀ=== ▷*\n\n *Kɪᴄʜᴜ Sᴇʀ *\n http://wa.me/17623393587.\n\n *Fᴀʏᴀs Sᴇʀ*\n http://wa.me/918075379950\n\n *Tᴏxɪᴄ Dᴇᴠɪʟ*\n http://wa.me/234905 3311892\n\n *Kɪᴄʜᴜ Sᴇʀ Bᴜsɪɴᴇss*\n Nᴜᴍʙᴇʀ ɪs ᴄᴏᴍɪɴɢ\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Gɪᴛ Lɪɴᴋ.\n\n\n*◁ === Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/Itsme-soman/KICHU-SER\n\n ", rowId:"rowid2"},
        {title: 'Kɪᴄʜᴜ Sᴇʀ Bᴏᴛ Gʀᴘ Lɪɴᴋ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/GgHXTY2Wo4rBhZGn8W2r9b\n\n ", rowId:" rowid5"},
        {title: 'Kɪᴄʜᴜ Sᴇʀ Cʜᴀɴɴᴇʟ Lɪɴᴋ ', description: "Kɪᴄʜᴜ Sᴇʀ Bᴏᴛ Mᴀᴋɪɴɢ Vɪᴅᴇᴏ\n\n\n*Sᴜʙsᴄʀɪʙᴇ Cʜᴀɴɴᴇʟ*\n\n*Is ᴄᴏᴍɪɴɢ ᴡᴀɪᴛ!* ", rowId:" rowid6"},
        {title: 'Kɪᴄʜᴜ Sᴇʀ Eʀʀᴏʀ Fɪxɪɴɢ Aɴᴅ Nᴇᴡ Uᴘᴅᴀᴛᴇs Aɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ Gʀᴏᴜᴘ', description: "Lɪɴᴋ \n\n\nhttps://chat.whatsapp.com/FkUTQZLhA0r2VuCz8XZjcC\n\n ", rowId:" rowid7"}
        {title: 'Sᴜᴘᴘᴏʀᴛɪɴɢ Gʀᴏᴜᴘ Lɪɴᴋ', description: "Lɪɴᴋ \n\n\nhttps://chat.whatsapp.com/Hnqa6MHlhDe19e4Jt1YGeK\n\n ", rowId:" rowid8"}
       ]
       
       const sections = [{title: "𝙺𝚒𝚌𝚑𝚞 𝚂𝚎𝚛❤️", rows: rows}]
       
       const button = {
        buttonText: 'Kɪᴄʜᴜ Sᴇʀ',
        description: "シ︎Kɪᴄʜᴜ Sᴇʀ Bᴏᴛシ︎",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
