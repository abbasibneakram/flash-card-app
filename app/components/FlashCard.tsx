"use client";

import { useState, useEffect } from "react";
import type { Flashcard } from "../types/flashcard";


type FlashCardProps = {
  card: Flashcard;
};

export default function FlashCard({ card }: FlashCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    setShowAnswer(false);
  }, [card.id]);


  return (
    <div className="mt-8 rounded-lg bg-white p-8 shadow">
      <h2 className="mb-6 text-xl font-semibold">
        {showAnswer ? card.answer : card.question}
      </h2>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {showAnswer ? "Show Question" : "Show Answer"}
      </button>
    </div>
  );
}