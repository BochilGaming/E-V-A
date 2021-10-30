const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} technews`

  let res = await fetch('https://feed2json.org/convert?url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml')
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.favicon, 'eror.jpg', `*Title:* ${json.data.title}\n*News:* ${json.data.content_html}\n*Date Published:* ${json.data.date_published}`, m, 0, { thumbnail: await (await fetch('https://telegra.ph/file/99fc5c91c8dfcdc58a557.jpg')).buffer() })
}
handler.help = ['technews']
handler.tags = ['tools']
handler.command = /^(technews)$/i
handler.limit = false
module.exports = handler