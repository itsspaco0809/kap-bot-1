const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PackCommand extends BaseCommand {
    constructor() {
        super('pack2', 'materials', []);
    }

    async run(client, message, args) {
        const packEmbed = new Discord.MessageEmbed()
            .addField('KAP GFX Bundle Pack', '[click me](https://mega.nz/file/w8kAmZbY#_zkA4jenGraNR8fXEIvkEgvHQwhRMSrWWWwAqbJuPAs)')
            .addField('Gradient Pack Rebirth x ranz', '[click me](https://mega.nz/file/E5dhRAKY#WVYG043-ugkg1hCr3MHrynWoqYktmPgVOIkqVTN-Z4g)')
            .setColor('#3068F6')

        await message.channel.send(packEmbed).catch(err => console.log(err));
    }
}