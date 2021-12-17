import { createContext, useContext, useState } from "react";

const DrawerContext = createContext(false);

export function DrawerProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export default function useDrawer() {
  return useContext(DrawerContext);
}
