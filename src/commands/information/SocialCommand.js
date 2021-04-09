const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const socialEmbed = new Discord.MessageEmbed()
      .setColor('#3068F6')
      .addField('━━━━━━━━━━', '**ranz Behance Portfolio**')
      .setThumbnail('https://mir-s3-cdn-cf.behance.net/user/276/d0e795387515995.5fec334c27e96.png')
      .addField('NEW - Social Media Headers - X era', '[click me](https://www.behance.net/itssranz)')
      .addField('━━━━━━━━━━', '**ranz Instagram**')
      .addField('Check out ranz\'s Instagram.', '[click me](https://www.instagram.com/ranz.png/)')
      .addField('━━━━━━━━━━', '**ranz Twitter**')
      .addField('Check out ranz\'s Twitter.', '[click me](https://twitter.com/Itsscopa)')
      .setTimestamp()
      .setFooter("ranz",)

    await message.channel.send(socialEmbed).catch(err => console.log(err));
  }
}