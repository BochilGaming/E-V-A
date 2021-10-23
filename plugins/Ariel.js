let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
This person wants to be kicked
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@919539102851/i
handler.command = new RegExp

module.exports = handler
