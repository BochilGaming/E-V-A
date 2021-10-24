let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Enter Song title!`
  let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.data[0]) throw json
  let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyinfo = `✨️ *Title:* ${title}
🗣️ *Artists:* ${artists}
🎆️ *Album:* ${album}
💚️ *Spotify Direct URL:* ${preview_mp3}\n\n@Eva`

  await conn.sendFile(m.chat, thumb, '', spotifyinfo, m)
  await conn.sendFile(m.chat, preview_mp3, 'Eva.mp3', spotifyinfo, m)
}
handler.help = ['spotify <query>', 'song <song name>']
handler.tags = ['internet']
handler.command = /^(spotify|music|song)$/i
// Made By github.com/TOXIC-DEVIL
module.exports = handler
