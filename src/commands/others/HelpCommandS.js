const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
    constructor() {
        super('h', 'others', []);
    }

    async run(client, message, args) {
        const sectionEmbed = new Discord.MessageEmbed()
        .setColor('#3068F6')
        .setTitle('Bot Help')
        .setDescription('Use !k as the prefix.')
        .addField('Help commands', '!k help (or !k h)')
        .addField('Social command', '!k social (or !k soc)')
        .addField('Packs command', '!k pack')
        .addField('Avatar commands', '!k avatar or !k avatar {user} (or !k ava or !k ava {user})')
        .addField('Get a roast', '!k roast')
        .setFooter(client.user.tag, client.user.displayAvatarURL());

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle('Information Commands.')
            .addField('Help Commands', 'This commands shows the user all the commands possable.')
            .addField('Socail Command', 'Displays social media in an embed.');

        const funEmbed = new Discord.MessageEmbed()
            .setTitle('Fun Commands.')
            .addField('Avatar Command', 'Returns a users avatar.')
            .addField('Meme Commands', 'Returns a Meme to the channel.')
            .addField('Say Command', 'Make the bot say a message to the channel.')
            .addField('Snipe Command', 'Returns the last deleted message within a channel.');

        const moderationEmbed = new Discord.MessageEmbed()
            .setTitle('Moderation Commands.')
            .addField('Ban Command', 'Bans a member from the server')
            .addField('Kick Command', 'Kicks a member from the server')
            .addField('Lock Command', 'Locks a channel in the server')
            .addField('Mute Command', 'Mutes a member in the server')
            .addField('Nickname Command', 'Changes a members nickname in a server')
            .addField('Nuke Command', 'Clones a channel and deletes the old one.')
            .addField('Purge Command', 'Purges messages within a channel')
            .addField('Recruit Command', 'Recruits a member to the staff team in a server')
            .addField('Tempban Command', 'Tempbans a member from the server')
            .addField('Tempmute Command', 'Tempmutes a member in a server')
            .addField('Unban Command', 'Unbans a member from the server')
            .addField('Unlock Command', 'Unlocks a channel in the server')
            .addField('Unmute Command', 'Unmutes a member in a server');

        const toolEmbed = new Discord.MessageEmbed()
            .setTitle('Tool Commands.')
            .addField('Verify Command', 'Gives the user the member role for the server.');

        if (!args[0]) return message.channel.send(sectionEmbed);
        if (args[0] == 'others') return message.channel.send(infoEmbed);
        else if (args[0] == 'other') return message.channel.send(funEmbed);
        else if (args[0] == 'tool') return message.channel.send(toolEmbed);
        else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
    }
}
