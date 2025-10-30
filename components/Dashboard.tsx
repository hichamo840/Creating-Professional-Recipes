import React, { useState, useEffect } from 'react';
import ProgramCard from './ProgramCard';
import SkeletonCard from './SkeletonCard';
import { PROGRAMS } from '../constants';
import { Program } from '../types';

const Dashboard: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data to demonstrate skeleton loaders
    const timer = setTimeout(() => {
      setPrograms(PROGRAMS);
      setIsLoading(false);
    }, 1500); // 1.5-second delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {isLoading
        ? Array.from({ length: PROGRAMS.length }).map((_, index) => <SkeletonCard key={index} />)
        : programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
    </div>
  );
};

export default Dashboard;