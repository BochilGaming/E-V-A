let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
}
handler.help = ['technews','techupdates']
handler.tags = ['internet']
handler.command = /^((tech|news)updates)$/i

module.exports = handler