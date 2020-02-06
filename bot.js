const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const readline = require("readline");
var prefix = "^";

bot.on("ready", () => {
  console.log(bot.user.tag + " is online");
});

bot.on("message",message=>{

  if(message.author.bot) return
  if(message.content.startsWith(prefix +"dmall")){
  	
  	let msg = message.content.slice((prefix +"dmall ").length)

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have permission to use that command**");

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Sending DM to all, it may take a while")
  }

})
bot.login("NTcxODA4MjE5OTM3Mzc0MjI4.XjyG_w.oN-rdV57ZPsotlov3MkaXchXuhc");
