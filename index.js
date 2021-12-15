const Telegraf = require('telegraf')
require('dotenv').config();


const TOKEN = process.env.TOKEN
const SERVER_URL = process.env.SERVER_URL
const PORT = process.env.PORT

const bot = new Telegraf(TOKEN)
bot.start( (ctx) => {
ctx.reply(`at the moment this bot does nothing coz i am still building it hehe`)

})
// bot.trb( (ctx) => {
// ctx.reply(`i hate trb`)

// })

bot.launch()