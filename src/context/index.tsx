import React, { createContext, useContext, useReducer } from "react";
import { ICountry, countryData } from "../utils/constant";

type AppState = {
  loading: boolean;
  country: ICountry;
  isModalOpen: boolean;
  isInfoModalOpen: boolean;
  contactNumber: string;
  isWheelRunning: boolean;
  persons: any[];
  deg: number;
  luckyData: any;
};

// Action types
export const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_COUNTRY: "SET_COUNTRY",
  SET_MODEL: "SET_MODEL",
  SET_INFO_MODEL: "SET_INFO_MODEL",
  SET_CONTAC_NUMBER: "SET_CONTAC_NUMBER",
  SET_WHEEL: "SET_WHEEL",
  SET_PERSONS: "SET_PERSONS",
  SET_DEG: "SET_DEG",
  SET_LUCKYDATA: "SET_LUCKYDATA",
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
    case actionTypes.SET_MODEL:
      return { ...state, isModalOpen: action.payload as boolean };
    case actionTypes.SET_INFO_MODEL:
      return { ...state, isInfoModalOpen: action.payload as boolean };
    case actionTypes.SET_CONTAC_NUMBER:
      return { ...state, contactNumber: action.payload as any };
    case actionTypes.SET_WHEEL:
      return { ...state, isWheelRunning: action.payload as boolean };
    case actionTypes.SET_PERSONS:
      return { ...state, persons: action.payload as any[] };
    case actionTypes.SET_DEG:
      return { ...state, deg: action.payload as number };
    case actionTypes.SET_LUCKYDATA:
      return { ...state, luckyData: action.payload };
    default:
      return state;
  }
};

const initialAppState: AppState = {
  loading: false,
  country: countryData[0],
  isModalOpen: true,
  isInfoModalOpen: true,
  contactNumber: "",
  isWheelRunning: false,
  persons: [],
  deg: 0,
  luckyData: null,
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
