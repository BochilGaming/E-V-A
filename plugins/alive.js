// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Day,":" Day,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Hours,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Minute,":" Minute,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Second,":" Second") : ""; return dDisplay + hDisplay + mDisplay + sDisplay; 
}

let handler  = async (m, { conn }) => {
  var {WAMessageProto} = require('@adiwajshing/baileys')

pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())

let buttons = [
   {buttonId: '/owner', buttonText: {displayText: 'Owner Bot'}, type: 1}
]
const buttonsMessage = {
    contentText: `
❏ *Bot Name* : ${conn.user.name}
❏ *Groups Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
❏ *Personal Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
❏ *User Total* : ${totaluser.length}
❏ *Host Number* : @${global.conn.user.jid.split('@')[0]}
❏ *Bio Bot* : ${ppstatus.status}\n\n*Support/Follow Me*\nhttps://instagram.com/_`,
    footerText: 'Eva ',
    imageMessage: (await conn.prepareMessage(m.chat, await require('../lib/functions').getBuffer(await conn.getProfilePicture(conn.user.jid)), 'imageMessage')).message.imageMessage,
    buttons: buttons,
    headerType: "IMAGE"
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m, contextInfo: { mentionedJid: [m.sender] }})

conn.relayWAMessage(sendMsg)


}
handler.help = ['info', 'alive']
handler.tags = ['main']
handler.command = /^(alive|info)$/i
handler.fail = null

module.exports = handler