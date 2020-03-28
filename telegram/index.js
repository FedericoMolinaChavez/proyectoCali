var TelegramBot=require('node-telegram-bot-api');
var token='1122418522:AAHL4WzNb7DE7fBPora-HOm_V5lJoMTEqF8';

var bot = new TelegramBot(token,{polling:true});

bot.onText(/\/echo (.+)/,function(msg,match){

    var chatId=msg.chat.id;
    var echo=match[1];
    bot.sendMessage(chatId,echo);

});