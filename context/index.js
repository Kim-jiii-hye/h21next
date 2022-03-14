import { createContext, useReducer } from "react";

//initial state
const initialState = {
  config_url: {
    SVC_PATH: "//img.hani.co.kr/section-image/15/h21",
    SVC_PATH_21: "//img.hani.co.kr/section-image/21/h21",
    WEB_URL: "http://h21.hani.co.kr",
    JSON_URL: "http://mapi_h21-master.hani.co.kr"
  },
};

// create context
const Context = createContext({});

// create reducer
const reducer = (state = initialState, action) => {
    return state;
  };
// create Provider component (High order component)
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };