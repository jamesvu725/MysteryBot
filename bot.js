// check for required files
const Discord = require('./Libs/node_modules/discord.js');
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
		         url: 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/pink_bean.jpg',
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
            {
              name: '?tetris',
              value: 'Returns a random tetris block (I, L, J, O, S, T, Z).',
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

      case 'tetris':
        let choice = Math.floor(Math.random() * 7);
        let tetrisMessage = {
          color: 0x0099ff,
          title: 'MysteryBot Random Tetris',
          thumbnail: {
		         url: 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/pink_bean.jpg',
	        },
          description: 'You got a block!',
          image: {
            url: 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/pink_bean.jpg',
          },
        };

        switch (choice) {
          case 0:
            tetrisMessage.description = 'You got an I block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_I.jpg';
            break;

          case 1:
            tetrisMessage.description = 'You got a J block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_j.jpg';
            break;

          case 2:
            tetrisMessage.description = 'You got a L block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_l.jpg';
            break;

          case 3:
            tetrisMessage.description = 'You got an O block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_o.jpg';
            break;

          case 4:
            tetrisMessage.description = 'You got a S block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_s.jpg';
            break;

          case 5:
            tetrisMessage.description = 'You got a T block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_t.jpg';
            break;

          case 6:
            tetrisMessage.description = 'You got a Z block!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/tetris_z.jpg';
            break;

          default:
            tetrisMessage.description = 'You got no blocks!';
            tetrisMessage.image.url = 'https://raw.githubusercontent.com/jamesvu725/MysteryBot/master/Source/img/pink_bean.jpg';
        }
        msg.channel.send({embed: tetrisMessage});
        break;
      // Default does nothing if command is incorrect
      default:
        break;
    }
  }
});


// Bot login
client.login(auth.token);
