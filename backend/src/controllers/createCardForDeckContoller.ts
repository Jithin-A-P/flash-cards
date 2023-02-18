import { Request, Response } from "express"
import Deck from '../models/deck'

export async function createCardForDeckContoller(req: Request, res: Response) {
    const deckId = req.params.id
    const deck = await Deck.findById(deckId)
    if(!deck)
        return res.status(400).send(`Deck with id: ${deckId} exists`)
    const { text } = req.body
    deck.cards.push(text)
    await deck.save()
    res.json(deck)
}