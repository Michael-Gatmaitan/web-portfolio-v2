import { useContext } from "react";
import { AppContext } from "../AppContext";

export const useMyContext = () => {
  const context = useContext(AppContext);

  if (context == undefined) {
    throw new Error("Context must me inside a Context Provider");
  }

  return context;
};
