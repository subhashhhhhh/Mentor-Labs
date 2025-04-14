import React from 'react';
import { useParams } from 'react-router-dom';

const StartupDetail = () => {
  const { startupId } = useParams<{ startupId: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Startup Details</h1>
      <p>
        Showing details for Startup ID: {startupId}
        [Placeholder content - Fetch and display specific startup details based on startupId]
      </p>
    </div>
  );
};

export default StartupDetail; 