// src/components/features/SummaryResponse.tsx
import React from 'react';
import type { SummaryData } from '../../types';
import toast from 'react-hot-toast';

interface Props {
  data: SummaryData;
}

const SummaryResponse: React.FC<Props> = ({ data }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.summary);
    toast.success('Summary copied to clipboard!');
  };

  return (
    <div className="prose">
      <button onClick={handleCopy} className="btn btn-sm float-right">Copy</button>
      <h3>Summary</h3>
      <p>{data.summary}</p>
      
      <h4>Key Points</h4>
      <ul>
        {data.keyPoints.map((point, index) => (
          <li key={index}><strong>{point}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryResponse;