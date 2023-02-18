import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [decks, setDecks] = useState([])

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    })
    const deck = await response.json()
    setDecks([...decks, deck])
    setTitle('')
  }

  const handleDeleteDeck = async (deckId: String) => {
    await fetch(`http://127.0.0.1:5000/decks/${deckId}`, {
      method: 'DELETE',
    })
    setDecks(decks.filter((deck) => deck._id !== deckId))
  }

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await fetch('http://127.0.0.1:5000/decks')
      const newDecks = await response.json()
      setDecks(newDecks)
    }
    fetchDecks()
  }, [])

  return (
    <div className="App">
      <ul className="decks">
        {
          decks.map((deck) => (
            <li key={deck._id}>
              <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
              {deck.title}
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input 
          type="text" 
          id="deck-title"
          value={title} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
            console.log(title)
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
  )
}

export default App
