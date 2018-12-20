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
   } else if (message.content === '!leave') {
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
   } else if (message.content === '!keepwalking') {
     message.channel.send('You keep walking down the path. You see a small hut in the distance, with smoke coming from the chimney. To walk past the hut, type !walkpast. To knock on the door, type !knock');
   } else if (message.content === '!knock') {
     message.channel.send('You knock on the door of the hut. A gnome answers the door. The gnome hands you a potion, and slams the door. To keep walking, type !keeponwalking')
   } else if (message.content === '!keeponwalking') {
     message.channel.send('You keep walking. You see a mountain in the distance. Suddenly, a man with the strange hat appears in front of you. "I challenge you to a duel, on the top of Mount Death." The man disappears. To climb the mountain, type !climbmountain. ');
   } else if (message.content === 'climbmountain') {
     message.channel.send('You climb the mountain. When you arrive at the top you see the man standing in a maniacal manner. To attack the man, type !fight. To jump off the mountain, type !jump.');
   } else if (message.content === '!walkpast') {
     message.channel.send('You walk past the hut. You see a mountain in the distance. Suddenly, a man with the strange hat appears in front of you. "I challenge you to a duel, on the top of Mount Death." The man disappears. To climb the mountain, type !climb. ');
   } else if (message.content === '!fight') {
     message.content.send('You swing your golden sword at the man. You miss. He swings back, and almost kills you. You notice the potion in your bag, and drink it. Suddenly, you feel powerful. You swing at the man and he dies instantly. Congradulations, you won this shitty game. To uninstall this bot, right click on its icon and click "Kick Discord RPG"');
   } else if (message.content === '!climb') {
     message.channel.send('You climb the mountain. When you arrive at the top you see the man standing in a maniacal manner. To attack the man, type !attackman. To jump off the mountain, type !jump.');
   } else if (message.content === '!attackman') {
     message.channel.send('You attack the man. Your sword misses, and he swings at you. You die instantly. Game Over. Type !play to restart.');
   } else if (message.content === '!jump') {
     message.channel.send('You jump off the mountain, to your death. Why would you do that? Game Over. Type !play to restart');
   } else if (message.content === '!attackgnome') {
     message.channel.send('You attack the gnome. The gnome swings back, and hits you with a fatal blow. Game over. To restart the game, type !play.');
   }
 });
 //my key to login to discord
 client.login(token);
