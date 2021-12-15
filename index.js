const Telegraf = require('telegraf')
require('dotenv').config();


const TOKEN = process.env.TOKEN
const SERVER_URL = process.env.SERVER_URL
const PORT = process.env.PORT

const bot = new Telegraf(TOKEN)
bot.start( (ctx) => {
ctx.reply(`the the moment this bot does nothing more than replying i hate trb when u type /trb coz i am still building it`)

})
bot.trb( (ctx) => {
ctx.reply(`i hate trb`)

})

bot.launch()