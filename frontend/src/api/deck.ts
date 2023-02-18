const API_URL = 'http://127.0.0.1:5000'

export type TDeck = {
    _id: string,
    title: string
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
