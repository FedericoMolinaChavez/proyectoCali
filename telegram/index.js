//const app=require('express')();
//app.listen(9110);
//app.get("/",(req, res)=>{res.send("Hello")})

const TelegramBot=require('node-telegram-bot-api');
var token='1122418522:AAHL4WzNb7DE7fBPora-HOm_V5lJoMTEqF8';

const bot = new TelegramBot(token,{polling:true});


bot.onText(/\/Ayuda/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['Ayudame con los sintomas.'],
          ['Mi clinica mas cercana.'],
          ['Policia.'],
        ]
      })
    };
    bot.sendMessage(msg.chat.id, 'En que me puede ayudar?', opts);
  });
  
 bot.on('text', (msg)=>{
    let text=msg.text.toLocaleLowerCase();

    if(text === 'Hola buenas tardes'){
        bot.sendMessage(msg.from.id, "Buenas tardes en que le puede ayudar su bot de confianza")
    }
    if(text === 'Hola buenos dias'){
        bot.sendMessage(msg.from.id, "Buenos dias en que le puede ayudar su bot de confianza")
    }
    if(text === 'Tengo una duda'){
        bot.sendMessage(msg.from.id, "Que duda tiene")
    }
    if(text === 'Tengo Miedo'){
        bot.sendMessage(msg.from.id, "No tenga miedo yo lo cuidare")
    }
    if(text === 'Me llamo jan'){
        bot.sendMessage(msg.from.id, "Hola jan esto es una prueba att caliche ")
    }    
 });