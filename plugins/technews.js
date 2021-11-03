const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} technews`
  let res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fdc751ee3bc14fd4bcb9cf4c130cfc4b')
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.favicon, 'eror.jpg', `*Title:* ${json.data.title}\n*News:* ${json.data.description}`, m, 0, { thumbnail: await (await fetch('https://telegra.ph/file/99fc5c91c8dfcdc58a557.jpg')).buffer() })
}
handler.help = ['technews']
handler.tags = ['tools']
handler.command = /^(technews)$/i
handler.limit = false