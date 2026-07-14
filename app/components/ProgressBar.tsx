type ProgressBarProps = {
  currentCard: number;
  totalCards: number;
};

export default function ProgressBar({
  currentCard,
  totalCards,
}: ProgressBarProps) {
  const progress = ((currentCard + 1) / totalCards) * 100;

  return (
    <div className="mt-6">
      <p className="mb-2 text-sm text-gray-600">
        Card {currentCard + 1} of {totalCards}
      </p>

      <div className="h-3 w-full rounded-full bg-gray-300">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}