const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = {
    name: 'roast',
    description: 'Says a roast from an api.',
    async execute(message, args) {
        if (!args[0]) return message.channel.send('Invalid Command Format: \`%roast @user\`');
        const mentionedMember = message.metions.members.first();
        if (!mentionedMember) return message.channel.send('The user mentioned is not in the server.');
        let msg = await message.channel.send('Getting a roast...');
        fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then(res => res.json())
            .then(json => {
                const roastEmbed = new Discord.RichEmbed()
                    .setColor('#3068F6')
                    .setTitle(mentionedMember.user.tag + ` ${json.insult}`)
                msg.edit(roastEmbed);
            })
    }
}