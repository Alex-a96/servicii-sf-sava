import React, { createContext, useContext, useState } from 'react';

interface GalleryUpdateContextType {
  triggerUpdate: () => void;
}

const GalleryUpdateContext = createContext<GalleryUpdateContextType | undefined>(undefined);

export const GalleryUpdateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const triggerUpdate = () => {
    setUpdateTrigger(prev => prev + 1);
  };

  return (
    <GalleryUpdateContext.Provider value={{ triggerUpdate }}>
      {children}
    </GalleryUpdateContext.Provider>
  );
};

export const useGalleryUpdate = () => {
  const context = useContext(GalleryUpdateContext);
  if (context === undefined) {
    throw new Error('useGalleryUpdate must be used within a GalleryUpdateProvider');
  }
  return context;
}; 