module . exports ={
  name: "uptime",
  code: `
$color[1;RANDOM]
$title[1;$username[$clientID] Botun Uptime Süresi]
$description[1;
Uptime sürem:  $replaceText[$replaceText[$replaceText[$replaceText[$uptime;hours;saat];minutes;dakika];second;saniye];days;Gün]
$thumbnail[1;$userAvatar[$clientID]]

`
}