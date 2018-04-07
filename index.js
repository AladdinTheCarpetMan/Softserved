const Discord = require("discord.js");

const token = ""; 
const prefix = "...";

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc u",
    "how should i know? im a bot bitch",
    "stop asking me questions",
    "stfu already",
    "if it somehow relates back to ur dick, i dont wanna know",
    "wha? nooo",
    "gah fuck",
    "do i look like i care about yo problems",
    "bitch pls",
    "i have things to do",
    "please let me die",
    "i wanna die",
    "kys",
];

var pictures = [
    "https://goo.gl/9cr5Hu",
    "https://goo.gl/F3ZVVy",
    "https://goo.gl/71zNxr",
    "https://goo.gl/sUDv4T",
    "https://goo.gl/bYu6vY",
    "https://goo.gl/KuuHz8",
    "https://goo.gl/fUbzXT",
    "https://goo.gl/wZNCaY",
    "https://goo.gl/8N2QAk",
    "https://goo.gl/3Frv6E",
    "https://goo.gl/fJ6nmh",
    "https://goo.gl/pKk8Rt",
    "https://goo.gl/W5WfHz",
    "https://goo.gl/W1CHyM",
    "https://goo.gl/nT6mwf",
];

var bot = new Discord.Client();

bot.on("ready", function () {
   console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + "blah blah blah");

    member.addRole(member.guild.roles.find("name", "bitch"));
});

bot.on("message", function(message) {
    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I'm the best bot, I'll fuck you up");
            break;
        case "folks":
            message.channel.sendMessage("we need to learn to chill :pensive:")
            break;    
        case "fellas":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .addField("Test Title", "Test Desc", true)
                .addField("Boop", "Beep", true)
                .addField("ha", "HA", true)
                .setColor(0xB28DFF)
                .setFooter("this user is gay gotteeeeeem")
                .setThumbnail(message.author.avatarURL)
                message.channel.sendEmbed(embed)
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }

});

bot.login(token);
