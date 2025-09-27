import React from 'react';

interface Flashcard {
  front: string;
  back: string;
  difficulty: string;
  tags: string[];
}

interface Props {
  data: { flashcards: Flashcard[] };
}

const FlashcardsResponse: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Flashcards</h3>
      <ul className="pl-0">
        {data.flashcards.map((card, idx) => (
          <li key={idx} className="mb-4 p-3 bg-yellow-100 rounded shadow-sm">
            <div className="font-semibold">Front: <span className="font-normal">{card.front}</span></div>
            <div className="font-semibold">Back: <span className="font-normal">{card.back}</span></div>
            <div className="text-sm text-gray-600">Difficulty: {card.difficulty}</div>
            <div className="text-sm text-gray-600">Tags: {card.tags.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardsResponse;
