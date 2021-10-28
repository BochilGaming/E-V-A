let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('https://www.theverge.com/rss/index.xml')
    await conn.sendFile(m.chat, url, '', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['technews','techupdates']
handler.tags = ['internet']
handler.command = /^((tech|news)updates)$/i

module.exports = handler