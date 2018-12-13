 //require the package "discord.js"
 const Discord = require('discord.js');
 //requires my config file
 const {
   token
 } = require('./config.json');
 //creates a new discord client
 const client = new Discord.Client();
 //when the client is ready, login and put "succesful login" in the console
 client.once('ready', () => {
   console.log('successful login');
 });
 //if !test is sent, the bot will respond "Hello World!"
 client.on('message', message => {
   if (message.content === '!play') {
     message.channel.send('You have stumbled upon a cave, with an unusual glowing aura inside. You enter the cave, and see two passages, one on the left, and one on the right. Enter !right if you want to go right, and !left if you want to go left');
      } else if (message.content === '!left') {
        message.channel.send('You went left. You see a large treasure chest, with a strange lock shaped like a skull. Type !search to search the room, or type !inspect to inspect the treasure chest.');
        } else if (message.content === '!search') {
          message.channel.send('You search the room. You find a picture of a room with a painting of a man with a funny hat. To leave the room type !leave')
        } else if (message.content === '!inspect') {
          message.channel.send('You inspect the chest. You see a skull marking on the lock. To leave the room, type !leave')
        } else if (message.content ==='!leave') {
          message.channel.send('You have stumbled upon a cave, with an unusual glowing aura inside. You enter the cave, and see two passages, one on the left, and one on the right. Enter !right if you want to go right, and !left if you want to go left, and !leavecave if you want to leave the cave.')
      } else if (message.content === '!right') {
        message.channel.send('You went right. A man with a funny hat appears in front of you. "Looks like you have fallen right into my trap." He laughs a maniacal laugh. To attack the man, type !attack, to flee, type !flee.');
      } else if (message.content == '!attack') {
          message.channel.send('You swing at the man. He swings back but misses. Suddenly, in a flash of smoke, the man is gone. To leave the cave, type !leavecave.');
        } else if (message.content === '!flee') {
          message.channel.send('You flee the passageway, barely escaping with your life. To leave the cave for good, type !leavecave. To see what was in the room on the left, type !seeleft.');
   } else if (message.content === '!seeleft') {
     message.channel.send('You went left. You see a large treasure chest, with a strange lock shaped like a skull. Type !search to search the room, or type !inspect to inspect the treasure chest.');
   } else if (message.content === '!inspect') {
       message.channel.send('You inspect the chest. You see a skull marking on the lock. To leave the cave, type !leavecave');
     } else if (message.content === '!search') {
       message.channel.send('You search the room. You find a picture of a room with a painting of a man with a funny hat. To leave the cave type !leavecave');
   } else if (message.content === '!leavecave') {
     message.channel.send('You leave the cave. A small gnome approaches you. To talk to the gnome, type !talk. To attack the gnome type !attackgnome');
   } else if (message.content === '!talk') {
       message.channel.send('You squat down, and talk to the gnome. "Hello me old chum!" The gnome hands you a new golden sword. You thank the gnome. Type !keepwalking to keep walking forward.');
     } else if (message.content === '!attackgnome') {
       message.channel.send('You attack the gnome. The gnome swings back, and hits you with a fatal blow. Game over. To restart the game, type !play.');
      }
 });
 //my key to login to discord
 client.login(token);
