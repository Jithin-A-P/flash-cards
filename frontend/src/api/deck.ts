export type TDeck = {
    _id: string,
    title: string
}

export async function deleteDeck(id: string) {
    await fetch(`http://127.0.0.1:5000/decks/${id}`, {
        method: 'DELETE',
    })
}

export async function getDecks(): Promise<TDeck[]> {
    const response = await fetch('http://127.0.0.1:5000/decks')
    return await response.json()
}

export async function createDeck(title: string): Promise<TDeck> {
    const response = await fetch('http://127.0.0.1:5000/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    })
    return await response.json()
}
