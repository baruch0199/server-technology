import { useState, createContext } from "react";

export const TabletMenuContext = createContext({
  tabletMenuPosition: false,
  setTabletMenuPosition: () => false,
  marginLeft: false,
});

export const TabletMenuProvider = ({ children }) => {
  const [hiddenExitIcon, setHiddenExitIcon] = useState(true);
  const [tabletMenuPosition, setTabletMenuPosition] = useState(false);
  const [background, setBackground] = useState("");

  const backgroundCover = {
    active: () => setBackground("blurred-background"),
    disactive: () => setBackground(""),
  };

  const marginLeft = {
    marginLeft: tabletMenuPosition ? "0" : "-100vw",
  };

  const value = {
    tabletMenuPosition,
    setTabletMenuPosition,
    marginLeft,
    backgroundCover,
    background,
    hiddenExitIcon,
    setHiddenExitIcon,
  };

  return (
    <TabletMenuContext.Provider value={value}>
      {children}
    </TabletMenuContext.Provider>
  );
};
