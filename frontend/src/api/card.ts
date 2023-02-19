import { API_URL } from "./config"
import { TDeck } from "./deck"

export async function createCard(deckId: string, text: string): Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    })
    return await response.json()
}

export async function deleteCard(deckId: string, index: number): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
      method: 'DELETE',
  })
  return await response.json()
}