//JAN SHARE YEE
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { jadibot, stopjadibot, listjadibot } = require ('./lib/jadibot');
const { uncache, nocache } = require('./lib/loader')
const { cmdadd } = require('./lib/totalcmd.js')
const { payment } = require('./store/payment.js')
const { iklan } = require('./store/iklan.js')
const { iklan2 } = require('./store/iklan2.js')
const { iklan3 } = require('./store/iklan3.js')
const { sewabot } = require('./store/sewabot.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { hole, api, beku, korak, petasan, es, mata, black, naga }= require('./lib/hole.js')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const { virtex, vipi } = require('./lib/virtex.js')
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let imageDevil =  fs.readFileSync("./media/wpmobile.png")
let fakeimage = fs.readFileSync("./media/Menu.jpg")
let thumb = fs.readFileSync("./media/Nakano.jpg")
let imgcel = fs.readFileSync("./media/Nakano.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

//FAKE NYA BANG
devilfake = setting.devilfake
fake = setting.fake
//Ganti No Owner Ok
const Tag = setting.tag

//setting lainya
owner = setting.owner
gamewaktu = setting.gamewaktu
gopay = setting.gopay
dana = setting.dana
ovo = setting.ovo
pulsa = setting.pulsa

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

//ADA LAH
banChats = true
offline = false
antitags = true

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Devil.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Devil.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Devil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Devil.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Devil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Devil.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Devil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = Devil = async (Devil, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	    const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/Nakano.jpg','base64')
  
        const botNumber = Devil.user.jid
        const owner = setting.owner
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Devil.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Devil.chats.all()
		const groupMetadata = isGroup ? await Devil.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? Devil.user.jid : Devil.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Devil.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBanned = ban.includes(sender)
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Devil.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return Devil.relayWAMessage(po, {waitForAck: true})
        }
        const katalog = (teks) => {
            res = Devil.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "𝑰𝒕𝒔 𝑴𝒆 𝐃𝐞𝐯𝐢𝐥 𝐁𝐨𝐭𝐳 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝑫𝒉𝒂𝒏𝒊 𝑮𝒂𝒏𝒔", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftroli})
            Devil.relayWAMessage(res)
        }        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imageDevil, surface: 200, message: fake, orderTitle: '𝘽𝙤𝙩𝙯 𝘿𝙀𝙑𝙄𝙇 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩', sellerJid: '0@s.whatsapp.net'} } }       

        const ftroli =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imgcel, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 𝐃𝐞𝐯𝐢𝐥 𝐁𝐨𝐭𝐳 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝑫𝒉𝒂𝒏𝒊 𝑮𝒂𝒏𝒔', sellerJid: '0@s.whatsapp.net'} } }       
           
        const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: fakeimage, surface: 200, message: devilfake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 𝐃𝐞𝐯𝐢𝐥 𝐁𝐨𝐭𝐳 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝑫𝒉𝒂𝒏𝒊 𝑮𝒂𝒏𝒔', sellerJid: '0@s.whatsapp.net'} } } 
        function monospace(string) {
            return '```' + string + '```'
        }  
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const fyt = (teks) => {
            Devil.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/J0YVFOD5QY4`}}})
        }    
        
        const fig = (teks) => {
            Devil.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://www.instagram.com/p/CRNTp51AvjG/?utm_medium=copy_link   `}}})
        }
        const reply = (teks) => {
	      Devil.sendMessage(from, teks, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           Devil.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Devil.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Devil.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           Devil.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Devil.sendMessage(from, teks, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Devil.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await Devil.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Devil.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Devil.groupRemove(to, [i])
        } else {
           await Devil.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       Devil.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Devil.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
}
      const hideTag = async function(from, text){
	       let anu = await Devil.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Devil.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           Devil.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Devil.sendMessage(to, media, type, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Devil.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Devil.sendMessage(from, hasil, type, options).catch(e => {
	       Devil.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Devil.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Devil.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Devil.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Devil.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Devil.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Devil.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = Devil.contacts[from] != undefined ? Devil.contacts[from].vname || Devil.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
//
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam🏙'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        //BUG TROL
       const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${ownerName}`,
						"orderTitle": `${ownerName}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
        //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!mek.key.fromMe && !isOwner && banChats === true) return

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                Devil.groupRemove(from, [sender])
            }
        }
        
        //RUNTIME BIO NYA
         let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await Devil.setStatus(`${botName} Aktif Selama: ${uptime} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'} | Baterai : ${baterai}% ${charging ? 'lagi dicas' : 'ga dicas'}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
    if (!mek.key.fromMe && banChats === true) return;
        // Sewa
             _sewa.expiredCheck(Devil, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(Devil, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                Devil.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *@tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Devil.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}	
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto"an
        Devil.updatePresence(from, Presence.composing)
        Devil.chatRead(from)
        Devil.updatePresence(from, Presence.recording)
        
         // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `#verify`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
		    teks = `Verification Berhasil\nJangan Lupa Baca Rules\nJika Ingin Melihat Menu Ketik *!menu* Untuk Melihat Menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}]
		buttonsMessage = {
	    contentText: `${teks}`,
        footerText: `Janggan Lupa Baca Rules`,
        buttons: buttons,
        headerType: 1
}
      prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{})
               Devil.relayWAMessage(prep)
}
	              switch(command){  	                   
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!menu',buttonText:{displayText: 'MENU'},type:1},{buttonId:'!igowner',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Lupa Save Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{})
               Devil.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Devil.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
Devil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      case 'patner':
               list = []
               listmenu = [`kizakixd`,`fauzan`,`dzz`,`wolfcodex`,`foxycodex`,`akira`,`devil`,`vizz`,`Devilni`,`rafata`,`kunz`,`bima`,`zyy`]
               listmenuu = [`𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`,`𝙁𝙖𝙭𝙭 𝙕𝙖𝙣`,`𝘿𝙯𝙯`,`𝙒𝙤𝙡𝙛𝘾𝙤𝙙𝙚𝙓`,`𝙁𝙤𝙭𝙮𝘾𝙤𝙙𝙚𝙓`,`𝘼𝙠𝙞𝙧𝙖`,`𝘿𝙚𝙫𝙞𝙡`,`𝙑𝙞𝙯𝙯𝘽𝙤𝙩𝙯`,`𝘿𝙝𝙖𝙣𝙞𝘽𝙤𝙩𝙯`,`𝙧𝙖𝙛𝙖𝙩𝙖𝙗𝙤𝙩𝙯`,`𝙠𝙪𝙣𝙯𝘽𝙤𝙩𝙯`,`𝘽𝙞𝙢𝙖𝘽𝙤𝙩𝙯`,`𝙕𝙮𝙮𝘽𝙤𝙩𝙯`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Ini List patner Nya Kak >\\<`,`  `, list)
               break
   case 'kizakixd': 
               sendKontak(from, `6285878313791`, `𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`, 'Sibukk!!')
               break
   case 'fauzan': 
               sendKontak(from, `6289516004292`, `𝙁𝙖𝙭𝙭 𝙕𝙖𝙣`, 'Sibukk!!')
               break 
   case 'dzz': 
               sendKontak(from, `6288226487112`, `𝘿𝙯𝙯`, 'Sibukk!!')
               break
   case 'akira': 
               sendKontak(from, `6287705048235`, `𝘼𝙠𝙞𝙧𝙖`, 'Sibukk!!')
               break
   case 'devil': 
               sendKontak(from, `16066128078`, `𝘿𝙚𝙫𝙞𝙡`, 'Sibukk!!')
               break  
   case 'vizz': 
               sendKontak(from, `62858840253594`, `𝙑𝙞𝙯𝙯 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break  
   case 'Devilni': 
               sendKontak(from, `6281333603591`, `𝘿𝙝𝙖𝙣𝙞 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break  
   case 'rafata': 
               sendKontak(from, `6287704764819`, `𝙧𝙖𝙛𝙖𝙩𝙖 𝙗𝙤𝙩𝙯`, 'Sibukk!!')
               break                                            
   case 'kunz': 
               sendKontak(from, `6287778886786`, `𝙠𝙪𝙣𝙯 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break
   case 'bima': 
               sendKontak(from, `6283849660579`, `𝘽𝙞𝙢𝙖 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break   
   case 'zyy': 
               sendKontak(from, `6289527058808`, `𝙕𝙮𝙮 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break
    case 'foxycodex':
               sendKontak(from, `6285158342254`, `𝙁𝙤𝙭𝙮𝘾𝙤𝙙𝙚𝙓`, 'Sibukk!!')
               break
               case 'wolfcodex': 
               sendKontak(from, `16066128078`, `𝙒𝙤𝙡𝙛𝘾𝙤𝙙𝙚𝙓`, 'Sibukk!!')
               break
      case 'bay':
      reply('Sayonara \n Semoga Kamu Sengsara🙏🏻🗿')
      break
      case 'selamatdatang':
      reply('Selamat Datang Kak Di Grub Jangan Lupa Patuhi Rules Yang Ada \n Semoga betah👏')
      break      
case 'menu':
        case 'help':
        case '🗿': 
        case 'oh':
        if (isBanned) return reply('Maaf kamu sudah terbenned!') 
        if (!isRegister) return reply(`You are not verified\n\silahkan ketik #verify`)
               const boy = "16066128078@s.whatsapp.net"    
               thu = await Devil.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text) 
               const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
               totalChat = await Devil.chats.all()
               groups = Devil.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = Devil.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               total = math(`${groups.length}*${privat.length}`)
               timestampe = speed();
               latensie = speed() - timestampe        
               charger = `${charging ? 'lagi dicas' : 'ga dicas'}`     
               menu =`Hai kak ${pushname} ${ucapanWaktu}
               
✗⃝⏰𝘛𝘪𝘮𝘦  𝘐𝘯𝘥𝘰𝘯𝘦𝘴𝘪𝘢 :

𝘸𝘪𝘣: ${time}
𝘸𝘪𝘵 : ${timeMak}
𝘸𝘪𝘵𝘢 : ${timeJay}
𝘛𝘢𝘯𝘨𝘨𝘢𝘭 : ${tanggal}
------------------------------------------------------------

✗⃝👤BOT INFO

✗⃝🔋𝘉𝘢𝘵𝘦𝘳𝘢𝘪 : ${baterai}% ${charger}
✗⃝⏲️𝘙𝘶𝘯𝘵𝘪𝘮𝘦 : ${runtime(process.uptime())}
✗⃝🪀𝘖𝘸𝘯𝘦𝘳 : @${owner}
✗⃝📚𝘓𝘪𝘣 : 𝘉𝘢𝘪𝘭𝘦𝘺𝘴 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 3.5.2
✗⃝⚒️𝘗𝘳𝘦𝘧𝘪𝘹 : 𝘮𝘶𝘭𝘵𝘪-𝘱𝘳𝘦𝘧𝘪𝘹
✗⃝📎𝘞𝘢 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 : ${Devil.user.phone.wa_version}
✗⃝🖥Mode : ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
------------------------------------------------------------

✗⃝👤YOUR INFO

𝕱⃝🗿 Name : _${pushname}_
𝕱⃝🗿 Bio : _${thu.status}_
𝕱⃝🗿 Nomor : _@${sender.split('@')[0]}_
𝕱⃝🗿 Premium : ${isPremium ? 'Ya' : 'No'}
------------------------------------------------------------
✗⃝🚨 ᴀᴛᴛᴇɴᴛɪᴏɴ

-ᴛʜᴀɴᴋs ғᴏʀ ᴀʟʟ ᴍʏ ᴛᴇᴀᴍ ᴀɴᴅ ᴍʏ ғʀɪᴇɴᴅs
-ᴛʜɪs sᴄʀɪᴘᴛ ɪs ғᴏʀ sʜᴀʟᴇ ɴᴏᴛ ғʀᴇᴇ
-ɪғ ʏᴏᴜ ғᴏᴜɴᴅ sᴏᴍᴇ ʙᴜɢ ɪ'ᴍ sᴏʀʀʏ ʙᴇᴄᴀᴜsᴇ ɪs sᴛɪʟʟ ᴜɴᴅᴇʀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
-ғᴏᴜᴍ ʙᴜɢ?? 
ʏᴏᴜ ᴄᴀɴ ᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
-ᴄᴏᴍɪɴɢ sᴏᴏɴ ғᴏʀ ᴍᴀɴʏ ғᴇᴀᴛᴜʀᴇs  ! 
------------------------------------------------------------
✗⃝📌 𝐘𝐎𝐔𝐓𝐔𝐁𝐄: -
------------------------------------------------------------
✗⃝📌𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌: instagram.com/WolfCodeX
------------------------------------------------------------
✗⃝📌𝐆𝐈𝐓𝐇𝐔𝐁: -`                          
               buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '️OWNER'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU'},type:1},{buttonId: `${prefix}rules`,buttonText:{displayText: 'RULES'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU'},type:1}]

               imageMsg = (await Devil.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: ` 𝘊𝘰𝘥𝘦𝘟 𝘛𝘦𝘢𝘮
`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://ibb.co/FzLx165/Nakano.jpg",
							thumbnail: fs.readFileSync('./media/Nakano.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                            Devil.relayWAMessage(prep)
                            break
//<==========[ ALL MENU ]==========>  
case 'allmenu':
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
thu = await Devil.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
var menu =`Hai kak ${pushname} ${ucapanWaktu}

✗⃝👤YOUR INFO

𝕱⃝🦢 Name : _${pushname}_
𝕱⃝🦢 Bio : _${thu.status}_
𝕱⃝🦢 Nomor : _@${sender.split('@')[0]}_
𝕱⃝🦢 Premium : ${isPremium ? 'Ya' : 'No'}
------------------------------------------------------------

   𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}groupsetting
𝕱⃝🦢 ${prefix}afk
𝕱⃝🦢 ${prefix}ceksewa
𝕱⃝🦢 ${prefix}kickall
𝕱⃝🦢 ${prefix}infogrup
𝕱⃝🦢 ${prefix}promote
𝕱⃝🦢 ${prefix}antivirtex
𝕱⃝🦢 ${prefix}demote
𝕱⃝🦢 ${prefix}listonline
𝕱⃝🦢 ${prefix}tagall 
𝕱⃝🦢 ${prefix}leave
𝕱⃝🦢 ${prefix}kick
𝕱⃝🦢 ${prefix}add
𝕱⃝🦢 ${prefix}setgrupname
𝕱⃝🦢 ${prefix}setppgrup
𝕱⃝🦢 ${prefix}setdesc
𝕱⃝🦢 ${prefix}sider
𝕱⃝🦢 ${prefix}hidetag 

   𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}bc
𝕱⃝🦢 ${prefix}term
𝕱⃝🦢 ${prefix}eval
𝕱⃝🦢 ${prefix}reset
𝕱⃝🦢 ${prefix}clearall
𝕱⃝🦢 ${prefix}leaveall
𝕱⃝🦢 ${prefix}join
𝕱⃝🦢 ${prefix}mode
𝕱⃝🦢 ${prefix}shutdown
𝕱⃝🦢 ${prefix}getquoted
𝕱⃝🦢 ${prefix}addupdate
𝕱⃝🦢 ${prefix}exif
𝕱⃝🦢 ${prefix}sewa
𝕱⃝🦢 ${prefix}self
𝕱⃝🦢 ${prefix}public
𝕱⃝🦢 ${prefix}ban
??⃝🦢 ${prefix}unban
𝕱⃝🦢 ${prefix}restart
𝕱⃝🦢 ${prefix}shutdown
𝕱⃝🦢 ${prefix}leavall
𝕱⃝🦢 ${prefix}deletepc
𝕱⃝🦢 ${prefix}update
𝕱⃝🦢 ${prefix}premium


   𝙒𝙄𝘽𝙐 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}loli
𝕱⃝🦢 ${prefix}manga
𝕱⃝🦢 ${prefix}anime 
𝕱⃝🦢 ${prefix}lolivideo
𝕱⃝🦢 ${prefix}husbu
𝕱⃝🦢 ${prefix}waifu
𝕱⃝🦢 ${prefix}milf
𝕱⃝🦢 ${prefix}neko
𝕱⃝🦢 ${prefix}kanna
𝕱⃝🦢 ${prefix}sagiri
𝕱⃝🦢 ${prefix}hentai
𝕱⃝🦢 ${prefix}cosplay
𝕱⃝🦢 ${prefix}wallnime
𝕱⃝🦢 ${prefix}kusonime
𝕱⃝🦢 ${prefix}megumin
𝕱⃝🦢 ${prefix}otakudesu
𝕱⃝🦢 ${prefix}doujindesu
𝕱⃝🦢 ${prefix}storyanime
𝕱⃝🦢 ${prefix}nakanomiku
𝕱⃝🦢 ${prefix}nakanonino
𝕱⃝🦢 ${prefix}nakanoitsuki
𝕱⃝🦢 ${prefix}otakuongoing
𝕱⃝🦢 ${prefix}nhentai
𝕱⃝🦢 ${prefix}nekopoi 
𝕱⃝🦢 ${prefix}nekopoi3d
𝕱⃝🦢 ${prefix}nekopoicosplay
𝕱⃝🦢 ${prefix}nekopoisearch

   𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}hentai
𝕱⃝🦢 ${prefix}waifu18+
𝕱⃝🦢 ${prefix}neko18+
𝕱⃝🦢 ${prefix}loli18+
𝕱⃝🦢 ${prefix}loli2
𝕱⃝🦢 ${prefix}trap
𝕱⃝🦢 ${prefix}blowjob
𝕱⃝🦢 ${prefix}ecchi
𝕱⃝🦢 ${prefix}ahegao
𝕱⃝🦢 ${prefix}hololewd
𝕱⃝🦢 ${prefix}sideoppai
𝕱⃝🦢 ${prefix}feets
𝕱⃝🦢 ${prefix}booty
𝕱⃝🦢 ${prefix}thighss
𝕱⃝🦢 ${prefix}hentai2
𝕱⃝🦢 ${prefix}armpits
𝕱⃝🦢 ${prefix}hentai3
𝕱⃝🦢 ${prefix}girls
𝕱⃝🦢 ${prefix}tiddies
𝕱⃝🦢 ${prefix}hentai4 
  
   𝘿𝙊𝙎𝘼 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}dosa1
𝕱⃝🦢 ${prefix}dosa2
𝕱⃝🦢 ${prefix}dosa3
𝕱⃝🦢 ${prefix}dosa4
𝕱⃝🦢 ${prefix}dosa5
𝕱⃝🦢 ${prefix}dosa6
𝕱⃝🦢 ${prefix}dosa7
𝕱⃝🦢 ${prefix}dosa8
𝕱⃝🦢 ${prefix}dosa9
𝕱⃝🦢 ${prefix}dosa10
𝕱⃝🦢 ${prefix}dosa11
𝕱⃝🦢 ${prefix}dosa12
𝕱⃝🦢 ${prefix}dosa13
𝕱⃝🦢 ${prefix}dosa14
𝕱⃝🦢 ${prefix}dosa15
𝕱⃝🦢 ${prefix}dosa16
𝕱⃝🦢 ${prefix}dosa17
𝕱⃝🦢 ${prefix}dosa18
𝕱⃝🦢 ${prefix}dosa19
𝕱⃝🦢 ${prefix}dosa20
𝕱⃝🦢 ${prefix}dosa21
𝕱⃝🦢 ${prefix}dosa23
𝕱⃝🦢 ${prefix}dosa24
𝕱⃝🦢 ${prefix}dosa24

   𝙄𝙎𝙇𝘼𝙈 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}listsurah
𝕱⃝🦢 ${prefix}alquran
𝕱⃝🦢 ${prefix}alquranaudio
𝕱⃝🦢 ${prefix}asmaulhusna
𝕱⃝🦢 ${prefix}kisahnabi
𝕱⃝🦢 ${prefix}jadwalsholat

   𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}fb 
𝕱⃝🦢 ${prefix}igdl 
𝕱⃝🦢 ${prefix}igdl2 
𝕱⃝🦢 ${prefix}twitter 
𝕱⃝🦢 ${prefix}tiktok 
𝕱⃝🦢 ${prefix}play 
𝕱⃝🦢 ${prefix}ythd 
𝕱⃝🦢 ${prefix}ytmp3 
𝕱⃝🦢 ${prefix}ytmp4 
𝕱⃝🦢 ${prefix}soundcloud 
𝕱⃝🦢 ${prefix}tiktoknowm 
𝕱⃝🦢 ${prefix}tiktokaudio
𝕱⃝🦢 ${prefix}mediafire 

   𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}brainly
𝕱⃝🦢 ${prefix}shopee
𝕱⃝🦢 ${prefix}playstore
𝕱⃝🦢 ${prefix}ssweb
𝕱⃝🦢 ${prefix}google
𝕱⃝🦢 ${prefix}image
𝕱⃝🦢 ${prefix}pinterest
𝕱⃝🦢 ${prefix}nulis
𝕱⃝🦢 ${prefix}iguser
𝕱⃝🦢 ${prefix}igstalk
𝕱⃝🦢 ${prefix}githubstalk
𝕱⃝🦢 ${prefix}tiktokstalk
𝕱⃝🦢 ${prefix}img2url
𝕱⃝🦢 ${prefix}ytsearch

   𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}dadu
𝕱⃝🦢 ${prefix}doge
𝕱⃝🦢 ${prefix}toimg
𝕱⃝🦢 ${prefix}patrick
𝕱⃝🦢 ${prefix}garwgura
𝕱⃝🦢 ${prefix}ttg
𝕱⃝🦢 ${prefix}attp
𝕱⃝🦢 ${prefix}stickeranime
𝕱⃝🦢 ${prefix}semoji
𝕱⃝🦢 ${prefix}sticker
𝕱⃝🦢 ${prefix}smeme
𝕱⃝🦢 ${prefix}swm
𝕱⃝🦢 ${prefix}take
𝕱⃝🦢 ${prefix}tovideo

   𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}slot
𝕱⃝🦢 ${prefix}limitgame
𝕱⃝🦢 ${prefix}gelud
𝕱⃝🦢 ${prefix}tictactoe
𝕱⃝🦢 ${prefix}siapaaku
𝕱⃝🦢 ${prefix}family100
𝕱⃝🦢 ${prefix}kuismath
𝕱⃝🦢 ${prefix}asahotak
𝕱⃝🦢 ${prefix}tebaklirik
𝕱⃝🦢 ${prefix}tebaklagu
𝕱⃝🦢 ${prefix}tebakkata
𝕱⃝🦢 ${prefix}susunkata
𝕱⃝🦢 ${prefix}kimiakuis
𝕱⃝🦢 ${prefix}caklontong
𝕱⃝🦢 ${prefix}tebakjenaka
𝕱⃝🦢 ${prefix}tebakanime
𝕱⃝🦢 ${prefix}tebaktebakan
𝕱⃝🦢 ${prefix}tebakgambar
𝕱⃝🦢 ${prefix}tebakbendera
𝕱⃝🦢 ${prefix}suit  

  
   𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}mining
𝕱⃝🦢 ${prefix}togel
𝕱⃝🦢 ${prefix}cekwatak
𝕱⃝🦢 ${prefix}cekmati
𝕱⃝🦢 ${prefix}wangy
𝕱⃝🦢 ${prefix}citacita
𝕱⃝🦢 ${prefix}toxic
𝕱⃝🦢 ${prefix}truth
𝕱⃝🦢 ${prefix}dare
𝕱⃝🦢 ${prefix}apakah
𝕱⃝🦢 ${prefix}bisakah
𝕱⃝🦢 ${prefix}kapankah
𝕱⃝🦢 ${prefix}rate
𝕱⃝🦢 ${prefix}jadian
𝕱⃝🦢 ${prefix}cantik
𝕱⃝🦢 ${prefix}ganteng
𝕱⃝🦢 ${prefix}beban
𝕱⃝🦢 ${prefix}babi
𝕱⃝🦢 ${prefix}cekganteng
𝕱⃝🦢 ${prefix}cekcantik 

   𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐
𝕱⃝🦢 ${prefix}update
𝕱⃝🦢 ${prefix}level
𝕱⃝🦢 ${prefix}rules
𝕱⃝🦢 ${prefix}botstat
𝕱⃝🦢 ${prefix}sewabot
𝕱⃝🦢 ${prefix}payment
𝕱⃝🦢 ${prefix}listsewa
𝕱⃝🦢 ${prefix}owner
𝕱⃝🦢 ${prefix}ping
𝕱⃝🦢 ${prefix}restapi
𝕱⃝🦢 ${prefix}runtime
𝕱⃝🦢 ${prefix}donasi
𝕱⃝🦢 ${prefix}listpremium
𝕱⃝🦢 ${prefix}sourcecode
𝕱⃝🦢 ${prefix}bugreport
𝕱⃝🦢 ${prefix}team
𝕱⃝🦢 ${prefix}grupbot

  𝙒𝘼𝙍 𝙈𝙀𝙉𝙐 
𝕱⃝🦢hakudet
𝕱⃝🦢${prefix}jadivirgam
𝕱⃝🦢${prefix}jadislayer

  𝙈𝘼𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
𝕱⃝🦢${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ғʟᴀᴍᴍɪɴɢ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ғᴀʟʟʟᴇᴀᴠᴇs <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴀᴛᴜʀᴇ3ᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡᴏʟғᴍᴇɴᴛᴀʟ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴜᴍᴍᴇʀ3ᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴄᴏғғᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴜɴᴅᴇʀɢʀᴀss <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴍᴏᴋᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʀᴏᴍᴀɴᴄᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴄᴜᴘ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴄᴜᴘ1 <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sʜᴀᴅᴏᴡ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴇᴏɴʟɪɢʜᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴇᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴛᴇxᴛ1917 <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴍɪɴɪᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʜᴀʟʟᴏᴡᴇɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙᴏᴋᴇʜ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴛᴏxɪᴄ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴛʀᴀᴡʙᴇʀʀʏ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙᴏx3ᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɪᴄᴇᴄᴏʟᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴛʜᴜɴᴅᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ғʀᴇᴇғɪʀᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}sɴᴏᴡ3ᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙɪʀᴛᴅᴀʏᴅᴀʏ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢᴀʟᴀxʏʙᴀᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ <ᴛᴇᴋs>  
𝕱⃝🦢${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ <ᴛᴇᴋs> 
𝕱⃝🦢${prefix}sᴛᴀʀsɴɪɢʜᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴛᴇxᴛᴄᴀᴋᴇ <ᴛᴇᴋs>  
𝕱⃝🦢${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɴᴏᴇʟᴛᴇxᴛ <ᴛᴇᴋs> 
𝕱⃝🦢${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢʀᴇᴇɴʙᴜsʜ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ <ᴛᴇᴋs>  
𝕱⃝🦢${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ <ᴛᴇᴋs>  
‌𝕱⃝🦢${prefix}ʙʀɪᴛʜᴅᴀʏᴄᴀᴋᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ <ᴛᴇᴋs> 
𝕱⃝🦢${prefix}ʀᴏʏᴀʟᴛᴇxᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ <ᴛᴇᴋs>  
𝕱⃝🦢${prefix}ʟɪɢʜᴛᴛᴇxᴛ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ <ᴛᴇᴋs>  
𝕱⃝🦢${prefix}ᴡᴇᴛɢʟᴀss <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʏᴛɢᴏʟᴅ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʏᴛsɪʟᴠᴇʀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ʟᴏɢᴏᴀ <ᴛᴇᴋs&ᴛᴇᴋs>
𝕱⃝🦢${prefix}pornhub <ᴛᴇᴋs&ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴛᴀʜᴛᴀ <ᴛᴇᴋs>
𝕱⃝🦢${prefix}ᴍᴀʀᴠᴇʟ <ᴛᴇᴋs&ᴛᴇᴋs
`
var imgs = await Devil.prepareMessage('0@c.us', thumb, image, { thumbnail: thumb })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = Devil.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menu,
                        "footerText": `CodeX Team`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `${tanggal}\n${ucapanWaktu}`,
                        "url": "Love You All >_<"
                    },
                    "businessOwnerJid": "0@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            Devil.relayWAMessage(ctlg)
            break

      case 'rules':
             Devil.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break

//YO MODE NYA
case 'mode':
if(!mek.key.fromMe) return reply('Only owner')
       menu =`SELF OR PUBLIC`

               buttons = [{buttonId: `${prefix}self`,buttonText:{displayText: 'SELF'},type:1},{buttonId: `${prefix}public`,buttonText:{displayText: 'PUBLIC'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}]

               imageMsg = (await Devil.prepareMessageMedia(fs.readFileSync(`./media/Nakano.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Nakano.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'PILIH SALAH SATU', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               Devil.relayWAMessage(prep)
               break
case 'donasi':
               txtt =`Hai Kak.....\n*${pushname}*\nMAU DONASI PILIH SALAH SATU\nGOPAY : ${gopay} \nDANA : ${dana} \nOVO : ${ovo} \n PULSA : ${pulsa}`

               buttons = [{buttonId: '!menu',buttonText:{displayText: 'MENU'},type:1},{buttonId:'!patner',buttonText:{displayText:'PATNER'},type:1},{buttonId:'!allmenu',buttonText:{displayText:'ALLMENU'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'DONASI MU SANGAT BERHARGA BAGI KAMI UNTUK MEMBELI APIKEY :)',
               buttons: buttons,
               headerType: 1
}

               prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{})
               Devil.relayWAMessage(prep)
               break
//------------------< lain nya >------------------- 
//STORE NYEE
case 'iklan1':
             Devil.sendMessage(from, iklan(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
case 'iklan2':
             Devil.sendMessage(from, iklan2(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
case 'iklan3':
             Devil.sendMessage(from, iklan3(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
case 'payment':
             Devil.sendMessage(from, payment(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
case 'sewabot':
             Devil.sendMessage(from, sewabot(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
//------------------< Islam Menu >------------------- 
case 'listsurah':
if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://mzailani-api.herokuapp.com/api/muslim/quran?${args[0]}&apikey=gaktau`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${setting.lolkey}`)
                    Devil.sendMessage(from, ini_buffer, audio, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://mzailani-api.herokuapp.com/api/muslim/kisahnabi?nabi=${query}&apikey=gaktau`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `wafat : ${get_result.wafat_usia}\n`
                    ini_txt += `Tempat : ${get_result.singgah}\n`
                    ini_txt += `kisah : \n${get_result.kisah}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ??🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Devil.sendMessage(from, starGame, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Devil.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              Devil.sendMessage(from, ini_buffer, audio, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              Devil.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Devil.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Devil.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Devil.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Devil.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              Devil.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              Devil.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Devil.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              Devil.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Devil.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//JADI BOT
case 'jadibot': 
      if (!isPremium) return reply(mess.only.premium)
        if (mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot');
        jadibot(reply, devil, from);
        break; 
         
      case 'stopjadibot':
        if (mek.key.fromMe)
          return reply('tidak bisa stopjadibot kecuali owner');
        stopjadibot(reply);
        break;
      case 'listbot':
        let tekss = '「 *LIST JADIBOT* 」\n';
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              try {
              if (!q) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Username : ${res.data.owner}\`\`\`
\`\`\`𝕱⃝🐸 Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Title : ${res[0].judul}\`\`\`
\`\`\`𝕱⃝🐸 Ext : MP3\`\`\`
\`\`\`𝕱⃝🐸 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Title : ${res[0].judul}\`\`\`
\`\`\`𝕱⃝🐸 Ext : MP4\`\`\`
\`\`\`𝕱⃝🐸 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
     if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
            if (!isPremium) return reply(mess.only.premium)
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Title : ${title}\`\`\`
\`\`\`𝕱⃝🐸 Kualitas* : 720p\`\`\`
\`\`\`𝕱⃝🐸 Size* : ${filesizeF}\`\`\`
\`\`\`𝕱⃝🐸 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Title : ${title}\`\`\`
\`\`\`𝕱⃝🐸 Kualitas : 720p\`\`\`
\`\`\`𝕱⃝🐸 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               Devil.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Nama : ${res[0].nama}\`\`\`
\`\`\`𝕱⃝🐸 Ukuran : ${res[0].size}\`\`\`
\`\`\`𝕱⃝🐸 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break
       
       case 'tt':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
       case 'tiktok': 
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Devil.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              Devil.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1': 
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)

             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
  if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${setting.lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await Devil.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break
      case 'ttaudio':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
memek ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(memek,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${memek} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
Devil.sendMessage(from,{url:'./'+memek},audio,{mimetype:'audio/mpeg'})
})
      case 'fb':
      case 'facebook':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
             break
       case 'nhentai':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              thumbnail = await getBuffer(get_result.coverImage.large)
              await Devil.sendMessage(from, thumbnail, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt })
              break
       case 'doujindesu':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             Devil.sendMessage(from, buffer, image, {caption: xixixai, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await Devil.sendMessage(from, thumbnail, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt })
             break
      case 'kusonime':
      if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt })
             break
       case 'otakudesu':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`𝕱⃝🐸 Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              ini_buffer = await getBuffer(get_result.thumb)
              await Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt })
              break
       case 'nekopoisearch':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`𝕱⃝🐸 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`𝕱⃝🐸 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: Buffer.alloc(0) })
})
              break
       
       case 'hentai4':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'tiddies':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'girls':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'hentai3':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'armpits':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'hentai2':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'thighss':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'booty':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'feets':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'sideoppai':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'hololewd':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'ahegao':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'ecchi':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'blowjob':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'trap':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'loli2':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'loli18+':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'neko18+':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'waifu18+':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
       reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       
       case 'hentai':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              Devil.sendMessage(from, gambar, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
}) 
              break
       case 'nakanoitsuki':
       case 'nakanoDevil':
       case 'nakanomiku':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              Devil.sendMessage(from, buffer, video, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               Devil.sendMessage(from, buff, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ot})
               break
            case 'waifu':
            if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
            
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await Devil.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              Devil.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
       
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
      let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await Devil.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              Devil.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
       
        case 'playy':
case 'lagu':
if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Devil.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: 'Nih Gan'})
					break  
					
					case 'ytdl':
					case 'play':
					if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply('Mau Play Apa Kak?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`

buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await Devil.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{})

Devil.relayWAMessage(prep)
break
					
          case 'lirik':
          if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
           case 'ppcp':
           case 'ppcouple':
           if (isBanned) return reply(mess.banned)
           anu = await fetchJson(`https://api.caliph71.xyz/api/ppcouple?apikey=PvDArEz6`)
           buff1 = await getBuffer (anu.result.male)
           Devil.sendMessage(from, buff1, image, {quoted: mek, caption: 'COWOK'})
           buff2 =await getBuffer (anu.result.female)
           Devil.sendMessage(from, buff2, image, {quoted: mek, caption: 'CEWEK'})
           break    
           case 'pinterest':
           if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (args.length < 1) return reply(`${prefix}Nakano Devil`)
              reply(mess.wait)
              teks = args.join(' ')
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari : ${teks}*`})
              break      
        case 'shopee':
        if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`𝕱⃝🐸 Nama : ${get_data[i].name}\`\`\`
\`\`\`𝕱⃝🐸 Harga : ${get_data[i].harga}\`\`\`
\`\`\`𝕱⃝🐸 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`𝕱⃝🐸 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`𝕱⃝🐸 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`𝕱⃝🐸 Stok : ${get_data[i].stock}\`\`\`
\`\`\`𝕱⃝🐸 Informasi : ${get_data[i].information}\`\`\`
\`\`\`𝕱⃝🐸 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*[ PLAYSTORE ]*

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`𝕱⃝🐸 Title : ${get_result[i].title}\`\`\`
\`\`\`𝕱⃝🐸 Harga : ${get_result[i].price}\`\`\`
\`\`\`𝕱⃝🐸 Rate : ${get_result[i].rating}\`\`\`
\`\`\`𝕱⃝🐸 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*[ YOUTUBE SEARCH ]*
*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`𝕱⃝🐸 Title : ${i.title}\`\`\`
\`\`\`𝕱⃝🐸 Views : ${i.views}\`\`\`
\`\`\`𝕱⃝🐸 Upload : ${i.ago}\`\`\`
\`\`\`𝕱⃝🐸 Durasi : ${i.timestamp}\`\`\`
\`\`\`𝕱⃝🐸 Channel : ${i.author.name}\`\`\`
\`\`\`𝕱⃝🐸 Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Devil.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
       if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  Devil.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               Devil.sendMessage(from, ibb, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai       
if (!isRegister) return reply(`You are not verified\n\nReply this chat bot dan ketik #verify`)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Devil.sendMessage(from, buff, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await Devil.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://i.ibb.co/7vfkgnW/Nakano.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              Devil.sendMessage(from, buffer, image, { caption: teks, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
///-------------SOUND--------///               
       case 'sound':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound = fs.readFileSync('./mp3/sound1.mp3')
               Devil.sendMessage(from, sound, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound1':
               const sound1 = fs.readFileSync('./mp3/sound1.mp3')
               Devil.sendMessage(from, sound1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                          
       case 'sound2':
               const sound2 = fs.readFileSync('./mp3/sound2.mp3')
               Devil.sendMessage(from, sound2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound3':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound3 = fs.readFileSync('./mp3/sound3.mp3')
               Devil.sendMessage(from, sound3, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound4':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound4 = fs.readFileSync('./mp3/sound4.mp3')
               Devil.sendMessage(from, sound4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break      
        case 'sound5':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound5 = fs.readFileSync('./mp3/sound5.mp3')
               Devil.sendMessage(from, sound5, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break           
        case 'sound6':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound6 = fs.readFileSync('./mp3/sound6.mp3')
               Devil.sendMessage(from, sound6, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound7':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound7 = fs.readFileSync('./mp3/sound7.mp3')
               Devil.sendMessage(from, sound7, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound8':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound8 = fs.readFileSync('./mp3/sound8.mp3')
               Devil.sendMessage(from, sound8, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound9':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound9 = fs.readFileSync('./mp3/sound9.mp3')
               Devil.sendMessage(from, sound9, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound10':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound10 = fs.readFileSync('./mp3/sound10.mp3')
               Devil.sendMessage(from, sound10, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound11':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound11 = fs.readFileSync('./mp3/sound11.mp3')
               Devil.sendMessage(from, sound11, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound12':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound12 = fs.readFileSync('./mp3/sound12.mp3')
               Devil.sendMessage(from, sound12, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound13':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound13 = fs.readFileSync('./mp3/sound13.mp3')
               Devil.sendMessage(from, sound13, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound14':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound14 = fs.readFileSync('./mp3/sound14.mp3')
               Devil.sendMessage(from, sound14, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound15':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound15 = fs.readFileSync('./mp3/sound15.mp3')
               Devil.sendMessage(from, sound15, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound16':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound16 = fs.readFileSync('./mp3/sound16.mp3')
               Devil.sendMessage(from, sound16, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound17':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound17 = fs.readFileSync('./mp3/sound17.mp3')
               Devil.sendMessage(from, sound17, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound18':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound18 = fs.readFileSync('./mp3/sound18.mp3')
               Devil.sendMessage(from, sound18, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound19':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound19 = fs.readFileSync('./mp3/sound19.mp3')
               Devil.sendMessage(from, sound19, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound20':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound20 = fs.readFileSync('./mp3/sound20.mp3')
               Devil.sendMessage(from, sound20, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound21':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound21 = fs.readFileSync('./mp3/sound21.mp3')
               Devil.sendMessage(from, sound21, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound22':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound22 = fs.readFileSync('./mp3/sound22.mp3')
               Devil.sendMessage(from, sound22, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound23':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound23 = fs.readFileSync('./mp3/sound23.mp3')
               Devil.sendMessage(from, sound23, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break              
        case 'sound24':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound24 = fs.readFileSync('./mp3/sound24.mp3')
               Devil.sendMessage(from, sound24, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                                                        
        case 'sound25':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const sound25 = fs.readFileSync('./mp3/sound25.mp3')
               Devil.sendMessage(from, sound25, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break
        case 'desah':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               const desahan4 = fs.readFileSync('./mp3/desahan4.mp3')
               Devil.sendMessage(from, desahan4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break
//FITUR BARU NYA
    case 'trigger':
    case 'wanted':
    case 'wasted':
    case 'blur':
    case 'trash':
    case 'circle':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              reply(mess.wait)
              owgi = await Devil.downloadMediaMessage(ger)
              anu = await upload(owgi)           
              titid = await getBuffer(`https://xdev-api.herokuapp.com/canvas/${command}?url=${anu}`)               
              Devil.sendMessage(from, titid, image, {quoted : ftroli, caption: '_Success_'}) 
              } else {
              reply('_Fotonya mana kak?_')
}
              break
//<========[ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊𝙈𝙀 ]=======>
   case "blackpink":
   case "neon":
   case "greenneon":
   case "advanceglow":
   case "futureneon":
   case "sandwriting":
   case "sandsummer":
   case "sandengraved":
   case "metaldark":
   case "neonlight":
   case "holographic":
   case "text1917":
   case "minion":
   case "deluxesilver":
   case "newyearcard":
   case "bloodfrosted":
   case "halloween":
   case "jokerlogo":
   case "fireworksparkle":
   case "natureleaves":
   case "bokeh":
   case "toxic":
   case "strawberry":
   case "box3d":
   case "roadwarning":
   case "breakwall":
   case "icecold":
   case "luxury":
   case "cloud":
   case "summersand":
   case "horrorblood":
   case "thunder":
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              kipass = args.join(" ")
              kontolmu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${setting.lolkey}&text=${kipass}`)
              Devil.sendMessage(from, kontolmu, image, { quoted: mek})
              break
//<========[ 𝙀𝙋𝙃𝙊𝙏𝙊 𝟯𝟲𝟬 ]=======>
   case "wetglass":
   case "multicolor3d":
   case "watercolor":
   case "luxurygold":
   case "galaxywallpaper":
   case "lighttext":
   case "beautifulflower":
   case "puppycute":
   case "royaltext":
   case "heartshaped":
   case "birthdaycake":
   case "galaxystyle":
   case "hologram3d":
   case "greenneon":
   case "glossychrome":
   case "greenbush":
   case "metallogo":
   case "noeltext":
   case "glittergold":
   case "textcake":
   case "starsnight":
   case "wooden3d":
   case "textbyname":
   case "writegalacy":
   case "galaxybat":    
   case "snow3d":
   case "birthdayday":
   case "freefire":
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              ini_txt = args.join(" ")
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
              Devil.sendMessage(from, ini_buffer, image, { quoted: mek})
              break
//<========[ 𝙋𝙃𝙊𝙏𝙊 𝙊𝙓𝙔 ]=======>
    case "shadow":
    case "cup":
    case "cup1":
    case "romance":
    case "smoke":
    case "burnpaper":
    case "lovemessage":
    case "undergrass":
    case "love":
    case "coffe":
    case "woodheart":
    case "woodenboard":
    case "summer3d":
    case "wolfmetal":
    case "nature3d":
    case "underwater":
    case "golderrose":
    case "summernature":
    case "letterleaves":
    case "glowingneon":
    case "fallleaves":
    case "flamming":
    case "harrypotter":
    case "carvedwood":
               if (args.length == 0) return reply(`Example: ${prefix + command} text`)
               lemari = args.join(" ")
               ndasmu = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.lolkey}&text=${lemari}`)
               Devil.sendMessage(from, ndasmu, image, { quoted: mek})
    case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await Devil.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    break;
    case 'tts':
				if (args.length < 1) return Devil.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts.js')(args[0])
					if (args.length < 2) return Devil.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Devil.sendMessage(from, buffer, audio, {quoted: ftroli, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					//await limitAdd(sender)
					break
     case 'panda':  
             anu = await fetchJson(`https://some-random-api.ml/img/panda`)
             anu1 = await getBuffer(anu.link)
             Devil.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
             break
     case 'panda1':  	
              anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
              anu1 = await getBuffer(anu.link)
              Devil.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
     case 'bird':  	
              anu = await fetchJson(`https://some-random-api.ml/img/birb`)
              anu1 = await getBuffer(anu.link)
              Devil.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
     case 'koala':  	
              anu = await fetchJson(`https://some-random-api.ml/img/koala`)
              anu1 = await getBuffer(anu.link)
              Devil.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
    case 'amongus':
              if (!isPremium) return reply('[⏳] Kamu bukan user premium, kirim perintah !buypremium untuk membeli premium')
              if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} text`)      
              buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${setting.lolkey}&text=${body.slice(9)}`)
              Devil.sendMessage(from, buffer, sticker, { quoted: mek })
              break
   case 'darkjokes': 
              reply(mess.wait)
              anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${setting.zekskey}`)
              anu1 = await getBuffer(anu.result)
              Devil.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: ftroli})
              break
    case 'ytgold':  
              if (args.length < 1) return reply(`*${prefix}${command} Devil*`)
              F = body.slice(8)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
   case 'ytsilver':  
              if (args.length < 1) return reply(`*${prefix}${command} Devil*`)
              F = body.slice(10)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
  case 'logoa':  
              if (args.length < 1) return reply(`*${prefix}${command} DEVIL&BOTZ*`)
              var F = body.slice(7)
	          var F1 = F.split("&")[0];
	          var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
  case 'pornhub':  	
              if (args.length < 1) return reply(`*${prefix}${command} DEVIL&BOTZ*`)
              var F = body.slice(9)
			  var F1 = F.split("&")[0];
	          var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/phlogo?text1=${F1}&text2=${F2}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
   case 'marvel':  	
              if (args.length < 1) return reply(`*${prefix}${command} DEVIL&BOTZ*`)
              var F = body.slice(8)
		      var F1 = F.split("&")[0];
			  var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
   case 'tahta':  	
              if (args.length < 1) return reply(`*${prefix}${command} Devil*`)
              F = body.slice(7)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${F}&apikey=${setting.zekskey}`)
              Devil.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
   case 'wall':  
             if (args.length < 1) return reply(`*${prefix}${command} Devil*`)
             F = body.slice(6)
             reply(mess.wait)
             anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=${setting.zekskey}&text=${F}`)
             Devil.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
             break   
   case 'fast':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		     media = await Devil.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		  	 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 uhh = fs.readFileSync(ran)
			 Devil.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
  case 'tupai':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Devil.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Devil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
   case 'gemok':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Devil.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
		     exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Devil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
    case 'bass':                 		
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Devil.downloadAndSaveMediaMessage(encmedia)
		 	 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Devil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
    case 'ghost':
		     encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Devil.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
		     Devil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
             fs.unlinkSync(ran)
			 })
		     break                             
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} Devil-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `*[ GITHUB USER ]*

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Username : ${ini_result.name}\`\`\`
\`\`\`𝕱⃝🐸 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`𝕱⃝🐸 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`𝕱⃝🐸 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`𝕱⃝🐸 Following : ${ini_result.following}\`\`\`
\`\`\`𝕱⃝🐸 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`𝕱⃝🐸 Link : ${ini_result.url}\`\`\`
`
             Devil.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} Devil.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Username : ${ini_result.username}\`\`\`
\`\`\`𝕱⃝🐸 Nama : ${ini_result.fullname}\`\`\`
\`\`\`𝕱⃝🐸 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`𝕱⃝🐸 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`𝕱⃝🐸 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`𝕱⃝🐸 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             Devil.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`𝕱⃝🐸 Username : ${get_result.username}\`\`\`
\`\`\`𝕱⃝🐸 Nama : ${get_result.nickname}\`\`\`
\`\`\`𝕱⃝🐸 Pengikut : ${get_result.followers}\`\`\`
\`\`\`𝕱⃝🐸 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`𝕱⃝🐸 Likes : ${get_result.likes}\`\`\`
\`\`\`𝕱⃝🐸 Video : ${get_result.video}\`\`\`
\`\`\`𝕱⃝🐸 Deskripsi : ${get_result.bio}\`\`\`
`
              Devil.sendMessage(from, pp_tt, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              Devil.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              Devil.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await Devil.sendMessage(from, ini_buffer, sticker, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} Devil`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              Devil.sendMessage(from, buffer, sticker, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'ttg':
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Devil.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Devil.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Devil.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Devil.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
      case 'take':
       case 'colong':
       case 'delwm':
              if (!isPremium) return reply(mess.only.premium)
              if (!isQuotedSticker) return reply('Stiker aja om')
encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
              media = await Devil.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, Devil, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await Devil.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Devil.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Devil.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await Devil.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Devil.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Devil.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Devil.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Devil.sendMessage(from, buffer, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  Devil.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await Devil.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Devil.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Devil.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Devil.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Devil.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await Devil.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               Devil.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break               
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'igowner':
       textImg(`https://instagram.com/devilstore19`)
       break
       case 'restapi':
       textImg(`https://api-devilbot.herokuapp.com/`)
       break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`Bot Ini Menggunakan Sc : Blom rilis masih di tes sc nya juga ntar gw jual:v`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat':
              groups = Devil.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = Devil.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await Devil.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `*BOT STATISTICS*
*❏ Group Chats :* ${groups.length}
*❏ Private Chats :* ${privat.length}
*❏ Total Chats :* ${totalChat.length}
*❏ Speed :* ${latensie.toFixed(4)} _Second_
*❏ Active Time :* ${runtime(process.uptime())}

*PHONE STATISTICS*
*❏ Baterai :* ${baterai}% ${charger}
*❏ Ram Usage :* ${ram2}
*❏ Platform :* ${os.platform()}
*❏ Hostname :* ${os.hostname()}
*❏ Wa Version:* ${Devil.user.phone.wa_version}
*❏ Device:* ${Devil.user.phone.device_model}
*❏ Browser :* FireFox`
             reply(teks)
             break
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Devil.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await Devil.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Devil.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Devil.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `Tanggal: ${tanggal}\nJam: ${time}\nBroadcast By ${botName}`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Devil.sendMessage(_.jid, { contentText: `${textt}`, footerText: `Tanggal: ${tanggal}\nJam: ${time}\nBroadcast By ${botName}`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./media/Menu.jpg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
     case 'clearall':
					if (!isOwner) return reply(nad.ownerb())
					anu = await Fauzan.chats.all()
					Fauzan.setMaxListeners(25)
					for (let _ of anu) {
						Fauzan.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
    case 'unbann':
			if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			bnnd = body.slice(7)
			ban.splice(`${bnnd}s.whatsapp.net`, 1)
			fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
		    reply(`Nomor wa.me/${bnnd} telah di unban!`)
		    break
      case 'ban':
    	    if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			bnnd = body.slice(5)
			ban.push(`${bnnd}s.whatsapp.net`)
			fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
			reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
			break
	  case 'mode':
         	   if (!mek.key.fromMe && !isOwner) return
               menu =`SILAHKAN PILIH ANTARA PUBLIC DAN SELF`                          
               buttons = [{buttonId: `${prefix}public`,buttonText:{displayText: '️PUBLIC'},type:1},{buttonId:`${prefix}self`,buttonText:{displayText:'SELF'},type:1}]

               imageMsg = (await Devil.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: `HAI KAK SILAHKAN PILIH MODE NYA`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               prep = await Devil.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://ibb.co/FzLx165/Nakano.jpg",
							thumbnail: fs.readFileSync('./media/Nakano.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                            Devil.relayWAMessage(prep)
                            break	         
      case 'public':
          if (!mek.key.fromMe && !isOwner) return
          if (banChats === false) return
          uptime = process.uptime()
          banChats = false
          reply(`ᴜᴅᴀʜ ᴅɪ ᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ`)
          break
     case 'self':
           if (!mek.key.fromMe && !isOwner) return
           if (banChats === true) return
           uptime = process.uptime()
           banChats = true
           reply(`ᴜᴅᴀʜ ᴅɪ ᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ sᴇʟғ`)
           break       
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = Devil.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Devil.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             Devil.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Devil.groupAdd(from, [entah])
}
             break
      case 'promote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Devil.groupMakeAdmin(from, mems_ids)
             } else {
             Devil.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Devil.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Devil.groupDemoteAdmin(from, mems_ids)
             } else {
             Devil.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Devil.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Devil.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Devil.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Devil.downloadMediaMessage(encmedia)
              Devil.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              Devil.updatePresence(from, Presence.composing)
              try {
              profil = await Devil.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await Devil.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = Devil.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              Devil.sendMessage(from, buff, image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await Devil.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Devil.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              Devil.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Devil.chats.get(ido).presences), Devil.user.jid]
             Devil.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await Devil.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//addfiturdosa🗿
                case 'dosa1':				 
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'dosa2':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'dosa3':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'dosa4':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'dosa5':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'dosa6':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'dosa7':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'dosa8':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
	
				   case 'dosa10':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':	
                if (!isPremium) return reply(mess.only.premium)			    
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':			
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'dosa21':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':		
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break             
//------------------< Fun >-------------------
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              Devil.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await Devil.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Devil.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Devil.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Devil.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Devil.sendMessage(from, buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (🖤 ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await Devil.getProfilePicture(from) || "https://i.ibb.co/7vfkgnW/Nakano.jpg"
               buffer = await getBuffer(linkpp)
               Devil.sendMessage(from, buffer, image, {caption: "Nih", quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await Devil.getProfilePicture(mberr) || "https://i.ibb.co/7vfkgnW/Nakano.jpg"
               buffer = await getBuffer(linkpp)
               Devil.sendMessage(from, buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await Devil.getProfilePicture(mberr) || "https://i.ibb.co/7vfkgnW/Nakano.jpg"
               buffer = await getBuffer(linkpp)
               Devil.sendMessage(from, buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               Devil.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
        case 'tes':
               qute = fs.readFileSync('media/Menu.jpg') 
				   Devil.sendMessage(from, qute, image, { quoted: freply, fyt, caption: 'OKEH KAK NYALA SILAHKAN DI PAKE' })
				   break
case 'media':
if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await Devil.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             Devil.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              Devil.sendMessage(from, teks, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              break
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Devil.sendMessage('16066128078@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await Devil.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case "antivirtex":
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(`𝑱𝒂𝒅𝒊𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑫𝒖𝒍𝒖 𝑪𝒖𝒌 🗿`)
               if (args[0] == "enable") {
               if (isAntivirtex) return reply("𝑼𝒅𝒂𝒉 𝑨𝒌𝒕𝒊𝒇 𝑪𝒐𝒌 𝑵𝒈𝒂𝒑𝒂𝒊𝒏 𝑫𝒊 𝑼𝒍𝒂𝒏𝒈𝒊");
               antivirtex.push(from);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex))
               reply("Sukses mengaktifkan fitur antivirtex di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant))
               reply("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break       
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             Devil.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             Devil.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             Devil.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             Devil.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//bug
case 'jadislayer':
if(!mek.key.fromMe) return reply('Only owner')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await Devil.downloadMediaMessage(encmedia)
                   res = Devil.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjUT7LC_HX1aN2vGVWA1vR2bHuiXgXbaZVimHrmbyof8.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "NTOWJHw6yWanIbsg0Ak7xNdaD11EorBAFwGwfBMtYb4=",
								"fileLength": "84017",
								"height": 718,
                                "width": 720,
								"mediaKey": "i80leRoQ6VIlsg/Eg4j+oBC6PqaU+zxukfTEEItxAmc=",
                                "fileEncSha256": "viVwa2sH7/1d5YWufykk5UFTg8vOuxu36Cbm8ggsgis=",
								"jpegThumbnail": media,
                                },
							"productId": "9999999",
							"title": `${api}`,
							"description": `${api}`,
							"productImageCount": 1
						},
						"businessOwnerJid": "16066128078@s.whatsapp.net",
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: bugtrol})
                  Devil.relayWAMessage(res)
              } else {
					reply(from, `Kirim gambar atau reply dengan caption ${prefix}jadiselayer caption`, mek)
				}
break
case 'jadivirgam':
				if (!mek.key.fromMe) return replyfakelink('Khusus Owner')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await Devil.downloadMediaMessage(encmedia)
					sendFakeImg(from, media, arg, thumbnail, mek)
				} else if (!q) {
          sendButMessage(from, `REPLY GAMBAR NYA`, `𝙒𝙖𝙩𝙚𝙧𝙢𝙖𝙠 𝙈𝙚𝙣`, [
            {
              buttonId: `${prefix}rules`,
              buttonText: {
                displayText: `RULES`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}owner`,
              buttonText: {
                displayText: `OWNER`,
              },
              type: 1,
            },
          ]);
        }
		break		         
//------------------< Menunya Bang:v >-------------------
      
      case 'groupbot':
             textImg(`https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli`)
             break
default:
if (budy.includes("!menu")){

		Devil.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./media/bot')

        Devil.sendMessage(from, loli, MessageType.audio, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: 'audio/mp4', ptt:true})

        }
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Devil.sendMessage(from, starGame, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Devil.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Devil.sendMessage(from, ucapan, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Devil.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Devil.sendMessage(from, ucapan1, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Devil.sendMessage(from, ucapan, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Devil.sendMessage(from, ucapan1, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Devil.sendMessage(from, ucapan, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

  return reply(require('util').format(e))

}
}
if (budy.startsWith('hakudet')){
if (!mek.key.fromMe && !isOwner) return
anu = fs.readFileSync('media/Menu.jpg')
Devil.updateProfilePicture(from, anu)
Devil.groupUpdateSubject(from, `𝗧𝗘𝗥𝗛𝗔𝗖𝗞 𝗢𝗟𝗘𝗛 𝘾𝙊𝘿𝙀𝙓𝙏𝙀𝘼𝙈☠︎`)
Devil.groupUpdateDescription(from, `𝗠𝗔𝗠𝗣𝗨𝗦 𝗚𝗪 𝗞𝗨𝗗𝗘𝗧`)
Devil.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
reply('MAMPUS GW KUDET GRUP LU')
}, 8000)
}
if (budy.startsWith('wolf')){
res = await Devil.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`INI MENU KHUSUS OWNER YA\`\`\``,
"buttonText": "List Menu",
"listType": "SINGLE_SELECT",
"sections": [
{
    "title": "menu owner",
    "rows": [
       {
          "title": "public",
          "rowId": "#public"
       },
       {
          "title": "self",
          "rowId": "#self"
       },
       {
          "title": "deletepc",
          "rowId": "#deletepc"
       },
       {
          "title": "restart",
          "rowId": "#restart"
       }
     ]
   }
 ]
}
}, {quoted:mek})
Devil.relayWAMessage(res)
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
Devil.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.png')}, 'extendedTextMessage', {sendEphemeral:true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"16066128078@g.us" }: {})},message:{"orderMessage":{"orderId":"16066128078","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



