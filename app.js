var TelegramBot = require('node-telegram-bot-api');
var request = require('request');

var TelegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
var telegramBot = new TelegramBot(TelegramBotToken, { polling: true });

telegramBot.onText(/\/start/, msg => 
    telegramBot.sendMessage(msg.from.id, "Hello, send /generate to get a name.")
);

telegramBot.onText(/\/generate/, msg => {
    request('http://ngaas.jacob.uk.com', (error, response, body) => 
        telegramBot.sendMessage(msg.from.id, JSON.parse(body).name)
    );
});