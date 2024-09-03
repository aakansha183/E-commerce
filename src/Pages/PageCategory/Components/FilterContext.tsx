import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FilterContextProps {
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [priceRange, setPriceRange] = useState<number[]>([50, 200]);

  return (
    <FilterContext.Provider value={{ priceRange, setPriceRange }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
