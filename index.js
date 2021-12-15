const Telegraf = require('telegraf')
require('dotenv').config();


const TOKEN = process.env.TOKEN
const SERVER_URL = process.env.SERVER_URL
const PORT = process.env.PORT
const port = process.env.PORT || 3000;

const bot = new Telegraf(TOKEN)
bot.start( (ctx) => {
ctx.reply(`if this bot hears u say trb it will intervene`)

})

bot.hears([/trb/,/TRB/ , /Trb/, /teeaarbee/], (ctx) => {
    ctx.reply('dont mention trb i hate him')})


// bot.trb( (ctx) => {
// ctx.reply(`i hate trb`)

// })

bot.launch()