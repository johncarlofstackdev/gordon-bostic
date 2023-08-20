import React, { createContext, useContext, useState, ReactNode } from "react";

// Create the context
const NavigationContext = createContext<{
  isNavigationVisible: boolean;
  showNavigation: () => void;
  hideNavigation: () => void;
}>({
  isNavigationVisible: false,
  showNavigation: () => {},
  hideNavigation: () => {},
});

// Global State Provider component
export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  const showNavigation = () => {
    setIsNavigationVisible(true);
  };

  const hideNavigation = () => {
    setIsNavigationVisible(false);
  };

  return (
    <NavigationContext.Provider value={{ isNavigationVisible, showNavigation, hideNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to access the navigation state and functions
export const useNavigation = () => useContext(NavigationContext);
