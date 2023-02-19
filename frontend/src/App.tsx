import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { createDeck, deleteDeck, getDecks, TDeck } from './api/deck'

import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [decks, setDecks] = useState<TDeck[]>([])

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault()
    const deck = await createDeck(title)
    setDecks([...decks, deck])
    setTitle('')
  }

  const handleDeleteDeck = async (deckId: string) => {
    await deleteDeck(deckId)
    setDecks(decks.filter((deck) => deck._id !== deckId))
  }

  useEffect(() => {
    const fetchDecks = async () => {
      const newDecks = await getDecks()
      setDecks(newDecks)
    }
    fetchDecks()
  }, [])

  return (
    <div className="App">
      <h1>Your Decks</h1>
      <ul className="decks">
        {
          decks.map((deck) => (
            <li key={deck._id}>
              <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
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
