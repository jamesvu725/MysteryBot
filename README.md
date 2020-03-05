# MysteryBot

This is a Discord bot created by mystery372.

MysteryBot is a Discord application. It is a Bot user account that can be added to a Discord server. It is written in JavaScript. Discord.js is the main library. It uses Node.js to run.

Link to add bot to server: https://discordapp.com/api/oauth2/authorize?client_id=574693516987334676&permissions=76800&scope=bot

Link to heroku if app isn't running: https://mysterybotdiscord.herokuapp.com/

## Requirements
1. You need a Discord account to use MapleBot if you don't have one, you can create an account at https://discordapp.com/
2. You need to have Node.js installed. You can download Node.js at https://nodejs.org/en/

## Set Up
1. Go to https://discordapp.com/developers/applications/ and click on "New Application".
2. Create a name for your application and click on your newly created application.
3. Click on the "Bot" tab and click "Add Bot"
4. Copy your token and go to sample_auth.json in the Source Folder and replace "Your Token Here" with the token you copied
5. Rename your sample_auth.json file to auth.json
6. Go to the "OAuth2" tab and under "SCOPES" click bot
7. Under "Bot Permissions," add Send Messages, Manage Messages, and Read Message History
8. Back in scopes, copy the link and use it in your browser to add the bot to your server
9. Make sure the bot is added to your server
10. Go to your Source folder and run "node bot.js" to run the bot server. Use Ctrl-C to stop the server.

If the dependencies are not up-to-date, run "npm install --save discord.js" in the Source folder.
Go to the Libs folder and replace the node_modules folder with the node_modules folder that was created in Source
