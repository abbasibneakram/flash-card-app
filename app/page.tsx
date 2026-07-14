"use client";

import { useState } from "react";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

import { flashcards } from "./data/flashcards";

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-4xl font-bold">
          JavaScript Flashcards
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Test your JavaScript knowledge one at a time.
        </p>

        <ProgressBar
  currentCard={currentCard}
  totalCards={flashcards.length}
/>

        <FlashCard card={flashcards[currentCard]} />
        <Navigation
  currentCard={currentCard}
  totalCards={flashcards.length}
  setCurrentCard={setCurrentCard}
/>
      </div>
    </main>
  );
}