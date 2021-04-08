const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PackCommand extends BaseCommand {
  constructor() {
    super('pack', 'materials', []);
  }

  async run(client, message, args) {
    const gradientpackEmbed = new Discord.MessageEmbed()
      .addField('Gradient Pack Rebirth x ranz', 'Gradient Pack')
      .setTitle('click me')
      .setURL('https://mega.nz/file/E5dhRAKY#WVYG043-ugkg1hCr3MHrynWoqYktmPgVOIkqVTN-Z4g')
      .setColor('#3068F6')

    const kappackEmbed = new Discord.MessageEmbed()
      .addField('KAP GFX Bundle Pack.', 'GFX Pack')
      .setTitle('click me')
      .setURL('https://mega.nz/file/w8kAmZbY#_zkA4jenGraNR8fXEIvkEgvHQwhRMSrWWWwAqbJuPAs')
      .setColor('#3068F6')

    await message.channel.send(gradientpackEmbed).catch(err => console.log(err));
    await message.channel.send(kappackEmbed).catch(err => console.log(err));
  }
}