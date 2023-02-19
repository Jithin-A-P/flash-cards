import { Request, Response } from "express"
import Deck from '../models/deck'

export async function getDeckContoller(req: Request, res: Response) {
    const deck = await Deck.findById(req.params.id)
    res.json(deck)
}