const Telegraf = require('telegraf')
require('dotenv').config();
const express = require('express')



const TOKEN = process.env.TOKEN
const URL = process.env.URL
const PORT = process.env.PORT || 8080;
var port = process.env.PORT || 8080;


const bot = new Telegraf(TOKEN)
bot.start((ctx) => {
  ctx.reply(`if this bot hears u say trb it will intervene`)
  
})

bot.hears([/hello bot/,/hi bot/,/Hi bot/,/Hello bot/,/hello trbhater/,/hi trbhater/,/Hello trbhater/], (ctx)=> 
ctx.reply('Hello ' + ctx.message.from.first_name))

bot.hears([/trb/, /TRB/, /Trb/, /teeaarbee/], (ctx) => {
  ctx.reply('dont mention trb i hate him')
})





bot.launch()


const app = express()



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})