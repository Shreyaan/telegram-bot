const Telegraf = require('telegraf')
require('dotenv').config();
const express = require('express')

const app = express()


const TOKEN = process.env.TOKEN
const URL = process.env.URL
const PORT = process.env.PORT || 8080;
var port = process.env.PORT || 8080;


const bot = new Telegraf(TOKEN)
bot.telegram.setWebhook(`${URL}/bot${TOKEN}`);
// expressApp.use(bot.webhookCallback(`/bot${TOKEN}`));
bot.startWebhook(`/bot${TOKEN}`, null, PORT)

bot.start((ctx) => {
  ctx.reply(`if this bot hears u say trb it will intervene`)
  
})


bot.hears([/hello bot/,/hi bot/,/Hi bot/,/Hello bot/,/hello trbhater/,/hi trbhater/,/Hello trbhater/,/hi @trbhater_bot/,/Hi @trbhater_bot/,/hello @trbhater_bot/,/Hello @trbhater_bot/], (ctx)=> 
ctx.reply('Hello ' + ctx.message.from.first_name ,{ reply_to_message_id: message_id } ))

bot.hears([/@trbhater_bot/], (ctx)=> 
ctx.reply('kya hai ' + ctx.message.from.first_name ,{ reply_to_message_id: message_id } ))

bot.hears([/trb/, /TRB/, /Trb/, /teeaarbee/], (ctx) => {
  ctx.reply('dont mention trb i hate him' , { reply_to_message_id: message_id })
})





bot.launch()





// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })