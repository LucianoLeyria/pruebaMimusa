import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [mode, setMode] = useState({
    mode: 'light',
    styles: {
      light: {
        color: '#011C44',
      },
      dark: {
        color: 'white',
      },
    },
  });

  const toggleColor = () => {
    setMode((prev) => {
      return {
        ...prev,
        mode: prev.mode === 'light' ? 'dark' : 'light',
      };
    });
  };

  ///funciones que modifican estados

  return (
    <div>
      <GlobalContext.Provider
        value={{
          mode,
          toggleColor,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
