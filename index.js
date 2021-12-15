const Telegraf = require('telegraf')
require('dotenv').config();


const TOKEN = process.env.TOKEN
const SERVER_URL = process.env.SERVER_URL
const PORT = process.env.PORT

const bot = new Telegraf(TOKEN)
bot.start( (ctx) => {
ctx.reply(`hello`)

})

bot.launch()