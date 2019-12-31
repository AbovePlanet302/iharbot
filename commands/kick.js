const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.reply("Usage: !kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let kReason = args.join(" ").slice(22);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("USER KICKED")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "Guild Moderator"
};

exports.help = {
  name: "kick",
  category: "Miscellaneous",
  description: "A standard issue example command.",
  usage: "-kick"
};
