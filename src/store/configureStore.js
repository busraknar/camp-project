import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import { useReducer } from "react";
import { createStore } from "redux";

export function configureStore() {
    return createStore(rootReducer,devToolsEnhancer())
}
