const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require('request');
const Choices = require('prompt-choices');
const Booru = require('booru');

console.log("Start Bot " + config.namebot)

client.on('message', message => {
  if (message.content === config.prefix + 'help') {
      message.channel.send({embed: help});
  }
  if (message.content === config.prefix + 'About') {
    message.channel.send({embed: About});
}
const args = message.content.trim().split(/ +/g);
const command = args.shift();
if(command === config.prefix + "neko"){
let text = args.join(" ");
let key = 'TinnerKungHandsome'
const options = {
url: 'http://cszteam.tk/neko/apineko.php?key='+ key +'&imgs=' + text ,
method: 'GET'
};
request(options, (err, res, body) => {
if (err) {
const err = new Error('The message');
console.error(err.message);
} else {
const obj = JSON.parse(body);
const nekoimg = new Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(config.namebot+' Neko API')
.setDescription('ลิงค์รูป : '+ obj.neko)
.setImage(obj.neko)
.setTimestamp()
.setFooter(message.author.username, message.author.displayAvatarURL);
message.channel.send({embed: nekoimg});
}})}
if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
if (message.content === config.prefix + 'among us') {
    const Choices = require('prompt-choices');
    const Impostor = new Choices([{name: ' Was the Impostor'},{name: ' Was Not the Impostor'}]);
    let random = Math.floor(Math.random() * 2);
    message.channel.send('.      　。　　　　•　    　ﾟ　　。\n　　.　　　.　　　  　　.　　　　　。　　   。　.\n 　.　　      。　        ඞ   。　    .    •\n •            　 。　.'+ message.author.username + Impostor.get(random, 'name') +' \n　 　　。　　　　　　ﾟ　　　.　　　　　.\n,　　　　.　 .　　       .               。')
}
if(message.content === config.prefix + 'shutup') {
  message.channel.send(',　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　 　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　   　　　　　 ✦ 　　　　　　　         　        　\n　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. \n　 　.　　　　　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　\n　˚　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. \n　　 　\n‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　*\n.　　　　　　　 ✦ 　　　　   　\n　　　˚　　　　　　　　　　　　　　*　　　　\n 　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. \n　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　a\n.　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.\n　　　,　　　　　　　.　　　　　　    　　　　　　　　　　　　　　　　　　　　  \n　　　　　　　　　　　　　　　　　　    　      　　　　　       　　*　　　　　　　　　.\n　　　　　　　　　　.　　　　　　　　　　　\n　　　　　　　　　　　　　　　　       　   　　　　\n　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ \n　   　　　,　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　*\n　　   　　　　　 ✦ 　　　　　　　         　        　　　　\n　　 　　　　　　　 　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　\n　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. \n　　 　\n‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　*\n.　　　　　　　 　　 \n　　　　　　　　　 　　　　　　　　.　　　　　　　　　　　　　　　,　　   　\n　　　　　　　　ﾟ　  　　　.　　　　　　　　　　.\n　　　　　　,　　　　　　　.✦ 　　　　 \n　　　˚　　　　　　　　　　　　　　*　　　　　　 \n 　　　　　　　　　　　　.　　　　　　　　　　　　　　. \n　　 　　　　　　　　　　　.　　　　　　    　\n　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　.\n　　　　　　　.　　　　　　　　　　　　　.\n　　　　　　　　　　　　       　   　　　　\n　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　　*\n　　   　　　　　 ✦ 　　　　　　　         　        　　　　\n　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. \n　 　　　　　.　　　　　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　\n　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. \n　　 　\n‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　　　　　,　　　　　　　.　　　　　　    　　　　\n　　　　　　　　　　　　　　　　　　  　　　　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　　　　       　   　　　　　　　　　　       　   　　　　　　　　　　　　　　　　         　　　　　　　　　　*\n')
}

const arginvite = message.content.trim().split(/ +/g);
const commandinvite = arginvite.shift().toLowerCase();
if(commandinvite === config.prefix + 'invite') {
  let user = (arginvite[0] || '1' );
  let time = (arginvite[1] || '60' );
  let channel = message.channel;
  channel.createInvite({maxAge: time,maxUses: user })
  .then(invite => {
  message.reply("ลิงค์เชิญเพื่อน "+ user +" คน "+ time +" วินาที: https://discord.gg/" + invite.code)
  })
}

const argkrtong = message.content.trim().split(/ +/g);
const commandkrtong = argkrtong.shift().toLowerCase();
if (commandkrtong === config.prefix + 'krtong') {
let textkt = (argkrtong[0] || 'ใส่คำขอสิควย' );
let randomkt = Math.floor(Math.random() * 101);
const kt = new Discord.MessageEmbed()
.setDescription(message.author.username + ' คำขอ ' + textkt)
.setImage('https://cszteam.tk/file/file/50cc93798e921844e54fb8ba6f2bb872/Screenshot%202020-10-31%20200427.png')
.setFooter('คำขอสมหวัง '+randomkt+'%');
message.channel.send({embed: kt})
}

//img Zone

const argsimg = message.content.trim().split(/ +/g);
const commandimg = argsimg.shift().toLowerCase();
if(commandimg === config.prefix + "img"){
  let text1 = args[0];
  switch (text1) {
    case 'rule34':
      let rule341 = args[1];
      Booru.search('rule34.xxx', rule341, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
                    .setColor('#ffffff')
                    .setTitle(config.namebot+' IMAGE Group')
                    .setDescription('ลิงค์รูป : '+ post.fileUrl)
                    .setImage(post.fileUrl)
                    .setTimestamp()
                    .setFooter(message.author.username, message.author.displayAvatarURL);
                    message.channel.send({embed: imgs});
                  })
      break;
    case 'gelbooru':
      let gelbooru1 = args[1];
      Booru.search('gelbooru.com', gelbooru1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'yande':
      let yande1 = args[1];
      Booru.search('yande.re', yande1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'safebooru':
      let safebooru1 = args[1];
      Booru.search('safebooru.org', safebooru1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'xbooru':
      let xbooru1 = args[1];
      Booru.search('xbooru.com', xbooru1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'rule34p':
      let rule34p1 = args[1];
      Booru.search('rule34.paheal.net', rule34p1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'hypnohub':
      let hypnohub1 = args[1];
      Booru.search('hypnohub.net', hypnohub1, { limit: 1, random: true })
    .then(posts => {
      for (let post of posts)
      
        var imgs = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(config.namebot+' IMAGE Group')
        .setDescription('ลิงค์รูป : '+ post.fileUrl)
        .setImage(post.fileUrl)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
        message.channel.send({embed: imgs});
                  })
      break;
    case 'help':
      message.channel.send({embed: imghelp});
      break;
    case '':
      message.channel.send({embed: hide});

      break;
    default:
      break;
}}})



// EM Zone
const help = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle(config.namebot)
  .setURL('https://cszteam.tk/bot/help.php')
  .setAuthor(config.namebot, 'https://cszteam.tk/logo.png', 'https://discord.gg/fgGYQdc')
  .setThumbnail('http://cszteam.tk/logo.png')
  .setDescription('คำสังทั้งหมด')
  .addFields(
    { name: 'หมวด รูปภาพ' , value: '+neko [ ใส่ภาพที่จะเรียก ]\n[ neko ] รูปแมวธรรมดา\n[ kiss ] จูบกัน\n[ hneko ] รูป Neko R18+\n[ hug ] กอดกัน\n[ pat ] สัตว์เลียง GIF\n[ tickle ] นิ้วจิ้มร่างกาย GIF\n[ classic ] R18+ GIF\n[ ngif ] แมว GIF\n[ erofeet ] ถุงน่องหอมๆ\n[ poke ] นิ้วจิ้มหน้า GIF\n[ les ] เลสเบียน ***ใหม่***' , inline: true },
    { name: 'หมวด เพลง' , value: 'prefix [ + ]\nplay [ เปิดเพลงใช่ Url เท่านั้น ]\nskip [ เปิดเพลงถัดไป ]\nstop [ หยุดเพลง ]\nnowplaying [ ดูเปิดเพลงไรอยู่ ]', inline: true},
    { name: '.' , value: '.', inline: true},
    { name: 'หมวด รูปภาพ [ ครอบจักวาล ]' , value: '+img help', inline: true},
	  { name: 'หมวด จิปถะ' , value: '+About แนะคำคนทำระบบ', inline: true},
  )
  .setTimestamp()
  .setFooter(config.adminname);

const About = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle(config.namebot)
  .setURL('https://cszteam.tk/')
  .setAuthor(config.namebot, 'https://cszteam.tk/logo.png', 'https://discord.gg/fgGYQdc')
  .setThumbnail('http://cszteam.tk/logo.png')
  .setDescription('สวัดดีครับผม TinnerKung หรือ <@'+ config.adminid +'> เป็นนักพัฒนาบอท <@'+ config.botid +'> ชื่งคนทำเค้า ว่าง')
  .setTimestamp()
  .setFooter(config.adminname);

const hide = new Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(config.namebot+' [ HELP For img ]')
.setURL('https://cszteam.tk/bot/help.php')
.setAuthor('config.namebot', 'https://cszteam.tk/logo.png', 'https://discord.gg/fgGYQdc')
.setThumbnail('http://cszteam.tk/logo.png')
.setDescription('โปรดใส่คำสั้ง')
.setTimestamp()
.setFooter(config.adminname);

const imghelp = new Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(config.namebot+' [ HELP For img ]')
.setURL('https://cszteam.tk/bot/help.php')
.setAuthor('config.namebot', 'https://cszteam.tk/logo.png', 'https://discord.gg/fgGYQdc')
.setThumbnail('http://cszteam.tk/logo.png')
.setDescription('คำสังทั้งหมด')
.addFields(
  { name: 'หมวด รูปภาพ [ ครอบจักวาล ]' , value: '+img [*1] [*2]', inline: true},
  { name: '[*1] ที่มา' , value: 'rule34\ngelbooru\nyande\nsafebooru\nxbooru\nhypnohub', inline: true},
  { name: '[*2] ชื่อรูป' , value: 'เขียนชือตัวละครถ้ามีเว้นวัคใส่ _ เช่น cirno_touhou จาก cirno touhou', inline: true},
)
.setTimestamp()
.setFooter(config.adminname);


client.login(config.token);