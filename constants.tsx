
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'short',
    title: 'Short Edit',
    price: '$5 – $10',
    icon: '🎬',
    features: [
      'TikTok / Shorts',
      'Meme edits',
      'Fast cuts',
      'Captions & effects',
      'Short-form content'
    ],
    tags: ['short', 'tiktok', 'shorts', 'meme', 'cheap', 'fast', 'vertical', 'viral']
  },
  {
    id: 'long',
    title: 'Long Edit',
    price: '$15 – $20',
    icon: '🎥',
    features: [
      'YouTube videos',
      'Gaming montages',
      'Movie / TV edits',
      'Longer timelines',
      'Advanced effects'
    ],
    tags: ['long', 'youtube', 'gaming', 'montage', 'movie', 'tv', 'cinematic', 'advanced', 'complex']
  }
];

export const CATEGORIES = [
  { label: 'Short Edits', value: 'short', icon: '🎬' },
  { label: 'Long Edits', value: 'long', icon: '🎥' },
  { label: 'Gaming', value: 'gaming', icon: '🎮' },
  { label: 'TikTok / Shorts', value: 'tiktok', icon: '📱' },
  { label: 'Meme', value: 'meme', icon: '😂' },
  { label: 'Custom', value: 'custom', icon: '⚙️' }
];
