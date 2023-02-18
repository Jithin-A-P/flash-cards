
import { Request, Response } from "express"
import Deck from '../models/deck'

export async function deleteDeckContoller(req: Request, res: Response) {
    const deckId = req.params.id
    const deck = await Deck.findByIdAndDelete(deckId)
    res.json({
        message: 'Succesfully deleted',
        deletedDeck: deck
    })
}