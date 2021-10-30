let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://feed2json.org/convert?url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
}
handler.command = /^(technews)$/i
handler.tags = ['internet']
handler.help = ['technews']
module.exports = handler