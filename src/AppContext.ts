import { createContext } from "react";

export interface AppContextI {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextI | undefined>(undefined);
