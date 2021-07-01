import React, { createContext, useState } from 'react';

//Can be consumed by any child (subscriber) of UserProvider
export const UserContext = createContext();

//This context provider is passed to components that need this user info
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Sandi");
  const [occupation, setOccupation] = useState("Engineer");

  return (
    <UserContext.Provider
      value={{
        name,
        occupation,
        setName,
        setOccupation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

