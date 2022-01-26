const express = require('express');
const { createCanvas, loadImage } = require('canvas')
const moment = require('moment')
const { getCard} = require('./cards.js')
const path = require('path')
require('colors')


const app = express();
const port = process.env.PORT || 3001;

app.use('/assets', express.static(path.join(__dirname, './assets')))


app.get('/cards', (req, res) => {
    res.send(getCard())
})

app.get('/hand', (req, res) => {
    const hand = [
        getCard(),
        getCard(),
        getCard(),
    ]
    res.send(hand)
})

app.get('/cards/getSprite/:type/:color/:number', (req, res) => {
    const canvas = createCanvas(200, 100)
    const ctx = canvas.getContext('2d') 

    const type = req.params.type
    const color = req.params.color
    const number = req.params.number


    ctx.font = '30px Impact'
    
    ctx.fillText(type , 50, 100)
    ctx.fillText(number , 50, 200)

    const params = {
        type: type,
        color: color,
        number: number
    }

    res.send(canvas.toDataURL('image/png'))

})

app.listen(port, () => {
    console.log('[Backend] '.blue + '[Listening]'.red + `: Backend listening on http://localhost:${port} at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
});