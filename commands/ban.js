const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let bReason = args.join(" ").slice(22);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("USER BANNED")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-logs");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "Guild Moderator"
};

exports.help = {
  name: "ban",
  category: "Miscellaneous",
  description: "A standard issue example command.",
  usage: "-ban"
};
