module.exports =[{
  name: "yardım", 
  code:`
$author[1;$username[$clientId] Yardım Menüsü;$userAvatar[$clientID]]
$color[1;GREEN]
$description[1;Yardım Menüsü.]
$addSelectMenu[1;yardım;;1;1;no;Moderasyon:Moderasyon komutlarını görmek için tıklayabilirsin.:modValue:no;Eğlence:Eğlence komutlarını görmek için tıklayabilirsin.:egValue:no]


`
},{
  name: "yardım", 
  type: "interaction", 
  prototype: "selectMenu", 
  code:`
$interactionUpdate[;{newEmbed:{author:$username[$clientID] Moderasyon Menüsü:$userAvatar[$clientID]}{color:GREEN}{description:Moderasyon Menü}};{actionRow:{selectMenu:yardım::1:1:no:{selectMenuOptions:Moderasyon:modValue:Moderasyon menüsü görmek için tıklayınız.:no}{selectMenuOptions:Eğlence:egValue:Eğlence menüsü görmek için tıklayınız.:no}}}]
$onlyIf[$interactionData[values[0]]==modValue;]
`
  
},{
name: "yardım", 
  type: "interaction", 
  prototype: "selectMenu", 
  code:`
$interactionUpdate[;{newEmbed:{author:$username[$clientID] Eğlence Menüsü:$userAvatar[$clientID]}{color:GREEN}{description:Eğlence Menü}};{actionRow:{selectMenu:yardım::1:1:no:{selectMenuOptions:Moderasyon:modValue:Moderasyon menüsünü görmek için tıklayınız:no}
{selectMenuOptions:Eğlence:egValue:Eğlence menüsü görmek için tıklayınız.:no}}}]
$onlyIf[$interactionData[values[0]]==egValue;]
`
  
}] 
