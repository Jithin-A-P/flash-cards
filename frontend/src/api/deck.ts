import { API_URL } from "./config"

export type TDeck = {
    _id: string,
    title: string,
    cards: string[]
}

export async function getDeck(deckId: string): Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}`)
    return await response.json()
}

export async function deleteDeck(id: string) {
    await fetch(`${API_URL}/decks/${id}`, {
        method: 'DELETE',
    })
}

export async function getDecks(): Promise<TDeck[]> {
    const response = await fetch(`${API_URL}/decks`)
    return await response.json()
}

export async function createDeck(title: string): Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    })
    return await response.json()
}
