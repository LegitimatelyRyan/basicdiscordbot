// index.js
// 
// Basic single file Discord bot which utilizes a basic function and array.
// 
// Ryan 
// MIT License
// 5/11/2020

const token = "yourtokenhere";

const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("I am ready!")
    client.user.setStatus('available')
  });

  client.on("message", async message => {

    if(message.author.bot) return;
    
    if(message.content.indexOf("!") !== 0) return;
    
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if(command === "ping") {
      const m = await message.channel.send("Ping?");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
    }
    });
client.login(token);