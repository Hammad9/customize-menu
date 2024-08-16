import React, { createContext, useContext, useState } from "react";


interface INITIAL_STATE {
  isMobileView: boolean;
  setIsMobileView: (v:boolean)=> void;
}

const initialState: INITIAL_STATE = {
  isMobileView: false,
  setIsMobileView: () => {},
};

const EventsContext = createContext(initialState);

const ContextProvider = React.memo(function MyProvider({ children }: any) {
  const [isMobileView, setIsMobileView] = useState(false);
  return (
    <EventsContext.Provider value={{ isMobileView, setIsMobileView }}>
      {children}
    </EventsContext.Provider>
  );
});

const useEventContext = () => useContext(EventsContext);

export { ContextProvider, useEventContext };
