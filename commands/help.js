const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (args[0] == "help") {
    message.reply("Usage: !ban <user> <reason>");
    return;
  }

  let banEmbed = new Discord.RichEmbed()
    .setDescription("**HELP CARD**")
    .setColor("#bc0000")
    .addField("**-help**", "This can be ran by a Server Member")
    .addField("**-purge**", "This can be run by a Server Staff Member")
    .addField("**-ban**", "This can be run by a Server Staff Member")
    .addField("**-kick**", "This can be run by a Server Staff Member")
    .addField("**-mute**", "This can be run by a Server Staff Member")
    .addField("**-new**", "This can be ran by a Server Member")
    .addField("**!restart**", "This can be run by the Prep Bot Services Owner");

  message.channel.send(banEmbed);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "Miscellaneous",
  description: "A standard issue example command.",
  usage: "-help"
};

