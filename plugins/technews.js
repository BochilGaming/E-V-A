let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('https://www.theverge.com/rss/index.xml')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.result)
}
handler.help = ['technews','techupdates']
handler.tags = ['internet']
handler.command = /^((tech|news)updates)$/i

module.exports = handler