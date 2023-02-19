import { Request, Response } from "express"
import Deck from '../models/deck'

export async function deleteCardOnDeckContoller(req: Request, res: Response) {
    const deckId = req.params.id
    const cardIndex = parseInt(req.params.index)
    const deck = await Deck.findById(deckId)
    if(!deck)
        return res.status(400).send(`Deck with id: ${deckId} exists`)
    deck.cards.splice(cardIndex, 1)
    await deck.save()
    res.json(deck)
}