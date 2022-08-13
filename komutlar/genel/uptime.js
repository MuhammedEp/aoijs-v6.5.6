module . exports ={
  name: "uptime",
  code: `
$color[1;O]
$footer[1;Sorgulayan: $userTag;$authorAvatar]
$author[1;$username[$clientID] Botun Uptime Süresi;$userAvatar[$clientID]]
$description[1;
Uptime sürem:  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;hour;saat];minute;dakika];econds;saniye];day;Gün];s;;1]
$thumbnail[1;$userAvatar[$clientID]]

`
}