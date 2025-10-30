import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse">
      <div className="flex flex-col h-full" style={{ minHeight: '250px' }}>
        {/* Top section for icon, name, and description */}
        <div>
          <div className="flex-shrink-0 mb-4">
            {/* Icon placeholder */}
            <div className="h-10 w-10 bg-slate-700 rounded-md"></div>
          </div>
          <div>
            {/* Title placeholder */}
            <div className="h-6 bg-slate-700 rounded w-3/4 mb-3"></div>
            {/* Description placeholder */}
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded w-full"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        
        {/* This container grows to fill available space */}
        <div className="flex-grow flex flex-col justify-end">
          {/* Button placeholder, pushed to the bottom and right */}
          <div className="mt-4 pt-4 flex justify-end">
            <div className="h-5 bg-slate-700 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;