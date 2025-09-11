import React from 'react';

export interface ScrollContextType {
  home: React.RefObject<HTMLDivElement | null>;
  about: React.RefObject<HTMLDivElement | null>;
  services: React.RefObject<HTMLDivElement | null>;
  photos: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
}

export const ScrollContext = React.createContext<ScrollContextType | undefined>(undefined);
