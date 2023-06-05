import React, { useState } from 'react';

export const TokenContext = React.createContext();

export function TokenContextProvider({ children }) {
  const [token, setToken] = useState('');

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
}
