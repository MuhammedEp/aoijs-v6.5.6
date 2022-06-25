module.exports = {
name:"i",
code:`

$description[1;Selam ben **$userTag[$clientID]** işte istatisklerim ^^

•🔧 Sahibim: **$userTag[$botOwnerID]**

•✌️ Komut sayım: **$commandsCount**

•✨ Toplam kanal sayım: **$allChannelsCount**

•🌌 Toplam yazı kanalı: **$allChannelsCount[text]**

•🌅 Toplam ses kanal: **$allChannelsCount[voice]**

•🌃 Toplam kategori sayısı: **$allChannelsCount[category]**

•👤 Toplam kullanıcı sayım: **$allMembersCount**

•🌐 Toplam sunucu sayım: **$serverCount**

•🍓 Hesap kuruluş tarihim: **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$clientID;time];years;Yıl;-1];months;Ay;-1];weeks; Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1] ** önce

•🍉 Uptime sürem: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$djseval[client.uptime;yes];time];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1];and;ve;-1]

•🍒 Pingim: $ping


`
}