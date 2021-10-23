let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/blowjob?APIKEY=HIRO', '', 'Here..', m)
  
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i

handler.limit = true
handler.group = false
handler.premium = true

module.exports = handler
