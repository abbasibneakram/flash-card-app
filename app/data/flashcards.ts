import { Flashcard } from "../types/flashcard";

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is a closure?",
    answer:
      "A closure is a function that remembers variables from its lexical scope even after the outer function has finished executing.",
  },
  {
    id: 2,
    question: "What is hoisting?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.",
  },
  {
    id: 3,
    question: "What is a Promise?",
    answer:
      "A Promise represents the eventual completion or failure of an asynchronous operation.",
  },
];