import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { getDecksContoller } from './controllers/getDecksController'
import { deleteDeckContoller } from './controllers/deleteDeckController'
import { createDeckContoller } from './controllers/createDeckCotnroller'
import { createCardForDeckContoller } from './controllers/createCardForDeckContoller'
import { getDeckContoller } from './controllers/getDeckContoller'
import { deleteCardOnDeckContoller } from './controllers/deleteCardOnDeckContoller'

import { config } from 'dotenv'
config()


const PORT = process.env.PORT ?? 5000

const app = express()
app.use(express.json())
app.use(cors())

app.get('/decks', getDecksContoller)
app.post('/decks', createDeckContoller)
app.get('/decks/:id', getDeckContoller)
app.delete('/decks/:id', deleteDeckContoller)
app.post('/decks/:id/cards', createCardForDeckContoller)
app.delete('/decks/:id/cards/:index', deleteCardOnDeckContoller)

mongoose.connect(
    process.env.MONGO_URL!
).then(
    () => {
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
        })
    }
)


