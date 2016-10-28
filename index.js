//Code by Yowu (uyu423@gmail.com), Node.js 6.3.1
var telegramBot = require('node-telegram-bot-api');
var dotenv = require('dotenv');
var fetch = require('node-fetch');
dotenv.load();

const {
  TOKEN,
} = process.env;

const BOT_URL = 'https://api.telegram.org/bot' + TOKEN + '/';

var bot = new telegramBot(TOKEN, {
  polling: true,
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  console.log("echo api called");
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

bot.onText(/\/call (.+)/, (msg, match) => {
  console.log(msg.from.id + " chat id called");
  var fromId = msg.from.id;
  console.log(match);
  bot.sendMessage(fromId, JSON.stringify(match));
});

bot. onText(/\/(.+)/, (msg, match) => {
  bot.sendMessage(msg.from.id, "아무런 명령어도 아니다");
});
