let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. where is the url?\n\nExample:\n${usedPrefix + command} https://youtube.com/shorts/`
  if (!args[0].match(/shorts/gi)) throw `wrong url`
  let res = await fetch(API('fxc7', '/api/download/ytshort', { url: args[0] }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json        
  await m.reply(wait)
  await conn.sendFile(m.chat, json.link, '', `${json.title}\n\n© Eva`, m)
}
handler.help = ['ytshorts'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ytshorts)$/i
handler.limit = true
module.exports = handler