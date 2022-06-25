
module.exports = {
name: "nuke",
code: `

$deleteChannels[$channelID]
$cloneChannel

$onlyPerms[managemessages; <@$authorID>, bu komutu kullanmak için \`Mesajları Yönet\` iznine sahip olmalısın.]

`
}   