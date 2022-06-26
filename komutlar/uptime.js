module . exports ={
  name: "uptime",
  code: `
$color[1;RANDOM]
$title[1;$username[$clientID] Botun Uptime Süresi]
$description[1;
Uptime sürem:  $replaceText[$replaceText[$replaceText[$replaceText[$uptime;hour;saat];minute;dakika];seconds;saniye];day;Gün]
$thumbnail[1;$userAvatar[$clientID]]

`
}