import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

import Deck from './models/deck'
config()


const PORT = process.env.PORT ?? 5000

const app = express()
app.use(express.json())
app.use(cors())

app.get('/decks', async (req: Request, res: Response) => {
    const decks = await Deck.find()
    res.json(decks)
})

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

app.delete('/decks/:id', async (req: Request, res: Response) => {
    const deckId = req.params.id
    const deck = await Deck.findByIdAndDelete(deckId)
    res.json({
        message: 'Succesfully deleted',
        deletedDeck: deck
    })
})

mongoose.connect(
    process.env.MONGO_URL!
).then(
    () => {
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
        })
    }
)


