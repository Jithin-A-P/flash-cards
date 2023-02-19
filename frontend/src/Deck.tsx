import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCard, deleteCard } from "./api/card";
import { getDeck, TDeck } from "./api/deck";

import "./Deck.css";

const Deck = () => {
  const [text, setText] = useState("")
  const [deck, setDeck] = useState<TDeck>()
  const [cards, setCards] = useState<string[]>([])

  const { deckId } = useParams()

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(deckId)
    const {cards: serverCards} = await createCard(deckId!, text)
    setCards(serverCards)
    setText("")
  };

  const handleDeleteCard = async (deckId: string, index: number) => {
    const updatedDeck = await deleteCard(deckId, index)
    setDeck(updatedDeck)
    setCards(updatedDeck.cards)
  };

  useEffect(() => {
    const fetchDeck = async () => {
      const deck = await getDeck(deckId!);
      setDeck(deck);
      setCards(deck.cards)
    };
    fetchDeck();
  }, [deckId]);

  return (
    <div className="Deck  ">
      <h1>{deck?.title}</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteCard(deckId!, index)}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="card-text">Card Text</label>
        <input
          type="text"
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
};

export default Deck;
