const Discord = require('discord.js');

module.exports = {
    name: 'membercount',
    description: 'Shows amount of user in the server.',
    execute(message, args) {
        const membersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.RichEmbed()
        .setTitle(`${message.guild.name} has ${membersInServer} members in the server!`);

        message.channel.send(memberEmbed);
    }
}