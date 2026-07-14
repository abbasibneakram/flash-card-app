type NavigationProps = {
  currentCard: number;
  totalCards: number;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navigation({
  currentCard,
  totalCards,
  setCurrentCard,
}: NavigationProps) {
  return (
    <div className="mt-6 flex justify-between">
      <button
        onClick={() => setCurrentCard(currentCard - 1)}
        disabled={currentCard === 0}
        className="rounded bg-gray-300 px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <button
        onClick={() => setCurrentCard(currentCard + 1)}
        disabled={currentCard === totalCards - 1}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}