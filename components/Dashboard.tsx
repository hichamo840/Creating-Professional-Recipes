import React from 'react';
import ProgramCard from './ProgramCard';
import { PROGRAMS } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROGRAMS.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default Dashboard;