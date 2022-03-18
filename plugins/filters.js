/* Copyright (C) 2020 farhan-dqz.
julie 
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919961857267@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/kichu.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/kichu.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.DURATION, quoted : message.data, ptt: true})
        }       
        if (!!message.mention && message.mention[0] == '919747671488@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/abhay.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/abhay.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.DURATION, quoted : message.data, ptt: true})
        }
        
const array = ['list','pm','kichu','soman','thakku','Thakku','Bot','bot','line','Mrng','Fayas','alone','avl','ayyo','broken','bye','chekka','Da','Ente','fuck','git','Ha','Hm','Koi','kozhi','Kichu','Line','love','lub','Makry','menu','Mm','mone','mp3','name','nanba','nanban','owner','pinnala','Poda','sad','sed','song','thug','tharan','tnx','u','umbi','Love','Kozhi','Hi','hi','aa','Ah','aliya','athann','baby','Bgm','chunk','Eda','bgm','ente','evide','Hlo','kalla','kerala','ku','muthe','myr','Ninte','number','Ok','parayana','patti','poda','potta','power','poyi','set','thech','venda','Ayisheri','Bass','Bot chathu','Bot myr','Break up','Hloo','Machane','Mp3','Name','Nihal','Poyo','Sticker','alive','bomb','beat','song','bot','chuii','chunk','da aliya','entry','feel song','ff','funda','haabi','hy','img','jabbar theri','kali venda','kozhi','kundan','love u muthe','line','maduth','mine','mp4','mrng','muthe','myr','myrn','name','nanba','nanban','new','njn pon','no tha','ok','patti','photo','pinalla','pm','po myre','poda','polayatt','poli','poor','power','pucha','pundachi','sad aada monu','sad ann','sad','sathyo','sed','seen','ser','show','song','sticker','super','vada','venda tto']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919961857267@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/kichu.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/kichu.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.DURATION, quoted : message.data, ptt: true})
        }       
        if (!!message.mention && message.mention[0] == '919747671488@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/abhay.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/abhay.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.DURATION, quoted : message.data, ptt: true})
        }        
        var uri = encodeURI(match[1])
const array = ['list','pm','kichu','soman','Thakku','thakku','Bot','bot','line','Mrng','Fayas','alone','avl','ayyo','broken','bye','chekka','Da','Ente','fuck','git','Ha','Hm','Koi','kozhi','Kichu','Line','love','lub','Makry','menu','Mm','mone','mp3','name','nanba','nanban','owner','pinnala','kozhi','Kozhi','Poda','sad','sed','song','thug','tharan','tnx','u','umbi','Love','Kozhi','Hi','hi','aa','Ah','aliya','athann','baby','Bgm','chunk','Eda','bgm','ente','evide','Hlo','kalla','kerala','ku','muthe','myr','Ninte','number','Ok','parayana','patti','poda','potta','power','poyi','set','thech','venda','Ayisheri','Bass','Bot chathu','Bot myr','Break up','Hloo','Machane','Mp3','Name','Nihal','Poyo','Sticker','alive','bomb','beat','song','bot','chuii','chunk','da aliya','entry','feel song','ff','funda','haabi','hy','img','jabbar theri','kali venda','kozhi','kundan','love u muthe','line','maduth','mine','mp4','mrng','muthe','myr','myrn','name','nanba','nanban','new','njn pon','no tha','ok','patti','photo','pinalla','pm','po myre','poda','polayatt','poli','poor','power','pucha','pundachi','sad aada monu','sad ann','sad','sathyo','sed','seen','ser','show','song','sticker','super','vada','venda tto']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./medias/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: true },quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919747671488@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./medias/stickers/abhay.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Da','git','Di','ano','help','Hlo','mass','menu','line','Mm','mp3','my','Ok','owner','pm','song','tha','thanks','update','wait','andi','avan','ban','chunni','da','ee','enik','food','fuck','habibi','heart','Hi','killadi','list','love','lyf','mandan','Mrng','myr','nale','nee','net','ni','nyt','ok','photo','poda','sneham','thakku','tts','umbi','girl','smile','alone','nokk','ninte','kichu','umma','what','bgm','myre','koch','line','ne','alive','Fayas','ada','kunna','uyir','eda','i','sry','mess','Kichu','Line','aliya','alla','aniyan','ayikotte','baby','bot','broken','chath','colour','cruel','Damu','dialogue','eh','endi','Enikk','enitt','entry','fan','fans','Fayas','fear','fuck','Fun','go','Happy','heme','Hey','Hm','idi','inna','iven','kanan','kazhicho','Killadi','koth','kunj','lays','Line','Love','lub','Makry','manda','Monu','mwona','mwonu','myren','Nan','natural','nenba','never','Njan','No','Nthada','ok','online','oo','Oru','pani','parayunne','pavam','poi','really','respect','ser','show','smile','sticker','Thakkumol','think','thund','ture','wasted','with','year','yes','z','Bot']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./medias/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

