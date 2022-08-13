module.exports=[{
name:"emojiler",
code:`
$author[1;$serverName[$guildID] Sunucusunun Emojileri;$serverIcon]
$footer[1;Sorgulayan: $userTag;$authorAvatar]
$description[1;$serverEmojis]

$addButton[1;Emojileri winrarla;secondary;winrar;no;📚]
`
},{
name:"winrar",
type:"interaction",
prototype:"button",
code:`
$createFile[$joinSplitText[
]
$textSplit[$serverEmojis;];emojiler.rar]
$onlyPerms[admin;Sadece Yöneticiler]
$ephemeral
`
}]