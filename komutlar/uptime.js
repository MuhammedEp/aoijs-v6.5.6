
bot.command({
  name: "uptime",
  code: `
$color[1;RANDOM]
$title[1;$username[$clientID] Botun Uptime Süresi]
$description[1;
Uptime sürem:  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$djseval[client.uptime;yes];time];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1];and;ve;-1]]
$thumbnail[1;$userAvatar[$clientID]]

`
});   