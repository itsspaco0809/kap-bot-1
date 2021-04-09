const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MemberCountCommand extends BaseCommand {
    constructor() {
        super('membercount', 'others', []);
    }

    execute(message, args) {
        const membersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.RichEmbed()
        .setTitle(`${message.guild.name} has ${membersInServer} members in the server!`);

        message.channel.send(memberEmbed);
    }
}