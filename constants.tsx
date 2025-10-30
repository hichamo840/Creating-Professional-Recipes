import React from 'react';
import { Program } from './types';
import { RecipeIcon, ArticleIcon, PinterestCircleIcon, ImageIcon, WebContentIcon } from './components/icons';

export const PROGRAMS: Program[] = [
  {
    id: 1,
    name: 'Recipe Based on My Structure',
    description: 'A personal AI assistant for custom recipe generation and culinary inspiration.',
    url: 'https://aistudio.google.com/apps/drive/1De8EQ82-1tBS024u7W9JWW18jSROnNa0?showAssistant=true&resourceKey=&showPreview=true',
    icon: RecipeIcon,
    color: 'text-orange-400',
    hoverColor: 'hover:shadow-orange-500/10',
    features: [
      'Personalized recipe generation',
      'Adjusts to dietary needs',
      'Instant culinary ideas',
    ],
  },
  {
    id: 2,
    name: 'Recipe Based on Competitors',
    description: 'Generates complete, well-structured articles and blog posts based on recipes.',
    url: 'https://aistudio.google.com/app/apps/drive/1GVqTHAZTcAJ8gASDdPwLlTWEydgKTTJ2?showPreview=true&showAssistant=true',
    icon: ArticleIcon,
    color: 'text-orange-400',
    hoverColor: 'hover:shadow-orange-500/10',
    features: [
      'SEO-friendly content',
      'Structured article layouts',
      'Saves valuable writing time',
    ],
  },
  {
    id: 3,
    name: 'Generate 10 Pins For The Same Recipe',
    description: 'Creates engaging Pinterest posts and descriptions for a specific recipe.',
    url: 'https://aistudio.google.com/apps/drive/1x6iUcakoSYc5Yyr49FqlM5M_OLobVUhn?showAssistant=true&showPreview=true&resourceKey=',
    icon: PinterestCircleIcon,
    color: 'text-red-500',
    hoverColor: 'hover:shadow-red-500/10',
    features: [
      'Multiple pin variations',
      'Engaging, clickable descriptions',
      'Maintains consistent branding',
    ],
  },
  {
    id: 4,
    name: 'Generate 20 Pins For Various Recipes',
    description: 'Generates creative Pinterest pin ideas and content for a variety of recipes.',
    url: 'https://aistudio.google.com/apps/drive/1MRUJBwJ7ZfguyYVCHMFNQFTFbxJ8Kmn6?showAssistant=true&showPreview=true&resourceKey=',
    icon: PinterestCircleIcon,
    color: 'text-red-500',
    hoverColor: 'hover:shadow-red-500/10',
    features: [
      'Diverse recipe and content ideas',
      'Optimized for bulk pin creation',
      'Sparks creative content angles',
    ],
  },
  {
    id: 5,
    name: 'Image Compressor',
    description: 'Efficiently convert and compress your images to web-friendly formats without losing quality.',
    url: 'https://aistudio.google.com/app/apps/drive/19SDB730XzpkBalIwrp5wmLPjFBj4TzuP?showAssistant=true&showPreview=true&resourceKey=',
    icon: ImageIcon,
    color: 'text-blue-400',
    hoverColor: 'hover:shadow-blue-500/10',
    features: [
      'Multiple format conversion (JPEG, PNG, WebP)',
      'Smart compression for smaller file sizes',
      'Preserves visual image quality',
    ],
  },
  {
    id: 6,
    name: 'Web Content Extractor',
    description: 'Extracts and reads the main content from any webpage URL, removing clutter.',
    url: 'https://aistudio.google.com/app/apps/drive/1r6rhn_OOHIEit6Eu_xe_DpzdN5G7T9yj?showAssistant=true&showPreview=true&resourceKey=',
    icon: WebContentIcon,
    color: 'text-green-400',
    hoverColor: 'hover:shadow-green-500/10',
    features: [
      'Reads content from any URL',
      'Summarizes long articles',
      'Removes ads and sidebars',
    ],
  },
  {
    id: 7,
    name: 'SEO Competitor Analyze',
    description: "Analyze competitors' SEO strategies and find opportunities to improve your ranking.",
    url: 'https://aistudio.google.com/app/apps/drive/1mFz3Rzo5U_i5WiEfFdGvT2eOEMUa7dti?showAssistant=true&showPreview=true&resourceKey=',
    icon: ArticleIcon,
    color: 'text-purple-400',
    hoverColor: 'hover:shadow-purple-500/10',
    features: [
      'Identify competitor keywords',
      'Analyze backlink profiles',
      'Discover content gaps',
    ],
  },
];