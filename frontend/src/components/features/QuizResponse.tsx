// src/components/features/QuizResponse.tsx
import React, { useState } from 'react';
import type { QuizData, QuizQuestion } from '../../types';

const QuizQuestionItem: React.FC<{ question: QuizQuestion }> = ({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="border-b py-4">
            <p className="font-semibold">{question.question}</p>
            {question.options && (
                <ul className="list-disc pl-5 mt-2">
                    {question.options.map((opt, i) => <li key={i}>{opt}</li>)}
                </ul>
            )}
            <button onClick={() => setShowAnswer(!showAnswer)} className="text-sm text-blue-600 mt-2">
                {showAnswer ? 'Hide' : 'Show'} Answer
            </button>
            {showAnswer && (
                <div className="mt-2 p-2 bg-green-100 text-green-800 rounded">
                    <p><strong>Answer:</strong> {question.answer}</p>
                    {question.explanation && <p className="mt-1 text-sm">{question.explanation}</p>}
                </div>
            )}
        </div>
    )
}

const QuizResponse: React.FC<{ data: QuizData }> = ({ data }) => {
  return (
    <div>
        <h3 className="text-xl font-bold mb-2">Quiz Time!</h3>
        {data.quiz.map((q, index) => (
            <QuizQuestionItem key={index} question={q} />
        ))}
    </div>
  );
};

export default QuizResponse;