const express = require('express');
const moment = require('moment')
const { getCard} = require('./cards.js')
const path = require('path')
require('colors')

const app = express();
const port = process.env.PORT || 3001;

app.use('/assets', express.static(path.join(__dirname, './assets')))


app.get('/cards', (req, res) => {
    const card = getCard()
    res.send(card)
    console.log(card)
})

app.get('/hand', (req, res) => {
    const hand = [
        getCard(),
        getCard(),
        getCard(),
    ]
    res.send(hand)
})



app.listen(port, () => {
    console.log('[Backend] '.blue + '[Listening]'.red + `: Backend listening on http://localhost:${port} at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
});