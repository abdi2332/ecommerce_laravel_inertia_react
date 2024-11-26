import { useEffect } from 'react';
import { create } from 'zustand';

const useDarkModeStore = create((set) => ({
  darkmode: JSON.parse(localStorage.getItem('darkmode')) || false , // Initial state
  toggleDarkMode: () =>
  set((state) => {
    const newDarkMode = !state.darkmode;
    localStorage.setItem('darkmode', JSON.stringify(newDarkMode)); // Save to localStorage
    return { darkmode: newDarkMode };
  }), 
}));


export default useDarkModeStore;
