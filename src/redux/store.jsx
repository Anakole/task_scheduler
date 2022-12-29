import { devToolsEnhancer } from "@redux-devtools/extension";
// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { rootReducer } from "./reduscer";

const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);
// export const store = configureStore(rootReducer, enchancer);
