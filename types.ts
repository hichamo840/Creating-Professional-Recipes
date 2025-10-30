import React from 'react';

export interface Program {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  hoverColor: string;
  features: string[];
}