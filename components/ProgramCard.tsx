import React, { useState } from 'react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const Icon = program.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      aria-expanded={isExpanded}
      className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-2xl ${program.hoverColor} cursor-pointer`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 mb-4">
          <Icon className={`h-10 w-10 ${program.color} transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:[filter:drop-shadow(0_0_6px_currentColor)]`} />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-slate-100 mb-2">{program.name}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{program.description}</p>
        </div>

        {/* Features section with transition */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-40 mt-4' : 'max-h-0'
          }`}
        >
          <h4 className="font-semibold text-slate-300 text-sm mb-2">Key Features:</h4>
          <ul className="space-y-1 list-disc list-inside text-slate-400 text-sm">
            {program.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex-shrink-0">
          <a
            href={program.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevents the card from collapsing when the link is clicked
            className={`inline-flex items-center justify-end text-sm font-medium ${program.color} hover:underline`}
          >
            Launch App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;