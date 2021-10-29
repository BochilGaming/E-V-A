let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://www.theverge.com/rss/index.xml')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
}
handler.command = /^(technews)$/i
handler.tags = ['internet']
handler.help = ['technews']
module.exports = handler