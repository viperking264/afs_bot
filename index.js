const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

console.log("Starting AFS Bot...");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log(`✅ AFS Bot is online as ${client.user.tag}!`);
    console.log(`Use this link to invite the bot:`);
    console.log(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=2147551232&scope=bot%20applications.commands`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    
    if (message.content === '!ping') {
        message.reply('🏓 Pong! AFS Bot is working!');
    }
    
    if (message.content === '!afs') {
        message.reply('🎌 Anime Fighting Simulator Bot!\nUse: !train, !quest, !profile (coming soon!)');
    }
});

// Get token from .env file
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('❌ ERROR: No token found in .env file!');
    console.log('Create a .env file with: DISCORD_TOKEN=your_token_here');
    process.exit(1);
}

client.login(token).catch(error => {
    console.error('❌ Login failed:', error.message);
    console.log('Make sure your token in .env is correct!');
});
