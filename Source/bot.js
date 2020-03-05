// check for required files
const Discord = require('../Libs/node_modules/discord.js');
const auth = require('./auth.json');
// Create the client
const client = new Discord.Client();
// Makes sure bot is ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: '!help' } });
});

// Commands for bot, prefix is '!'
client.on('message', msg => {
  if (msg.content.substring(0,1) == '?') {
    let args = msg.content.substring(1).split(' ');
    let cmd = args[0];
    args = args.splice(1);
    // List of commands
    switch (cmd) {
            // Returns the help page
      case 'help':
        const helpMessage = {
          color: 0x0099ff,
          title: 'MysteryBot Help',
          thumbnail: {
		         url: 'https://66.media.tumblr.com/c4f802f428a3dd0908ee7cf4d681fa72/tumblr_oa0xd8aIwW1rzaqg4o1_400.jpg',
	        },
          fields: [
            {
              name: '?help',
              value: 'Displays this help page',
            },
            {
              name: '?ping',
              value: 'Returns the ping from server',
            },
          ],
        };
        msg.channel.send({embed: helpMessage});
        break;

      // Returns the ping
      case 'ping':
        let start = msg.createdTimestamp;
        msg.channel.send('MysteryBot responded').then((msg) => {
          let diff = Math.abs(msg.createdTimestamp - start);
          msg.edit(`MysteryBot responded in *${diff/1000} seconds*`);
        }).catch((error) => console.log(error));
        break;

      // Default does nothing if command is incorrect
      default:
        break;
    }
  }
});


// Bot login
client.login(auth.token);
