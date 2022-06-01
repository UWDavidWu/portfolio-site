import React, { useState, useContext, useEffect } from "react";

const MediaContext = React.createContext();

export function useMediaContext() {
  return useContext(MediaContext);
}

const MediaContextProvider = ({ children }) => {
  const [largeScreen, setLargeScreen] = useState(false);
  
  useEffect(() => {
    window.innerWidth > 768 ? setLargeScreen(true) : setLargeScreen(false);
  }, []);

  return (
    <MediaContext.Provider value={largeScreen}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
