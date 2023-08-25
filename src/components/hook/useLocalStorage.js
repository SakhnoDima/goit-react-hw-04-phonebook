import { useEffect, useState } from 'react';

export const useLocalStorage = (kay, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(kay)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(kay, JSON.stringify(state));
  }, [state, kay]);
  return [state, setState];
};
