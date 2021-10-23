let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `To use ${usedPrefix}anime\nPlease type: ${usedPrefix}anime [query]\nExample: ${usedPrefix}anime random\n\nquery which is available:\nrandom, waifu, husbu, neko`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply('Searching...')

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'Dasar Wibu', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Theres an error cuy... Can you ask\n*Instagram:* @!', m)
            })
    } else {
        conn.reply(m.chat, `Sorry the query is not available. Please type ${usedPrefix}animelist to see the query list`, m)
    }

}

handler.help = ['animelist <query>']
handler.tags = ['anime']
handler.command = /^(animelist)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
