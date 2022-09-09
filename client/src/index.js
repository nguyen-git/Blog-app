import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import {DarkModeContextProvider} from "../src/components/Context/darkModeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
