const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const behanceEmbed = new Discord.MessageEmbed()
      .setTitle('ranz Behance Portfolio')
      .setURL('https://www.behance.net/itssranz')
      .setThumbnail('https://mir-s3-cdn-cf.behance.net/user/276/d0e795387515995.5fec334c27e96.png')
      .setColor('#3068F6')
      .addField('Check out ranz\'s Portfolio.', 'NEW - Social Media Headers - X era')
      .setTimestamp()
      .setFooter("ranz", )

    const instagramEmbed = new Discord.MessageEmbed()
      .setTitle('ranz Instagram')
      .setURL('https://www.instagram.com/ranz.png/')
      .setThumbnail('https://mir-s3-cdn-cf.behance.net/user/276/d0e795387515995.5fec334c27e96.png')
      .setColor('#3068F6')
      .addField('Check out ranz\'s Instagram.', 'Keep updating!')
      .setTimestamp()
      .setFooter("ranz", )

      const twitterEmbed = new Discord.MessageEmbed()
      .setTitle('ranz Twitter')
      .setURL('https://twitter.com/Itsscopa')
      .setThumbnail('https://cdn.discordapp.com/attachments/413028585633349633/829397485487128647/image0.jpg')
      .setColor('#3068F6')
      .addField('Check out ranz\'s Twitter.', 'Keep updating!')
      .setTimestamp()
      .setFooter("ranz", )

   await  message.channel.send(behanceEmbed).catch(err => console.log(err));
   await  message.channel.send(instagramEmbed).catch(err => console.log(err));
   await  message.channel.send(twitterEmbed).catch(err => console.log(err));
  }
}