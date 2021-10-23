let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    // auto clear when there is a message that can't be seen on wa desktop
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = handler