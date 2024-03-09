import React, { createContext, useContext, useReducer } from "react";
import { ICountry, countryData } from "../utils/constant";

type AppState = {
  loading: boolean;
  country: ICountry;
};

// Action types
export const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_COUNTRY: "SET_COUNTRY",
} as const;

export type Action = {
  type: keyof typeof actionTypes;
  payload?: unknown;
};

const contextReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload as boolean };
    case actionTypes.SET_COUNTRY:
      return { ...state, country: action.payload as ICountry };

    default:
      return state;
  }
};

const initialAppState: AppState = {
  loading: false,
  country: countryData[1],
};

export const AppContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<AppState, Action>>(
    contextReducer,
    initialAppState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};
