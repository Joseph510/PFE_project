import React, { createContext, useState } from "react";

// Create the TokenContext
export const TokenContext = createContext();

// Create a TokenContext provider component
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5b3Vzc2VmIiwiaWF0IjoxNjg0OTM1MTAyLCJleHAiOjE2ODUwMjE1MDJ9.LL69zoe-PNLsQCxYIpxmIYjzgSVhQDRWCaR-w92I2PmYJrMMnYaoACwWqSTrBeIhkTfi6a97RSiUL_78yRkhGw");

  // Function to update the token value
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};
