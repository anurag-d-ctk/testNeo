import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import neoTheme from "./chakraTheme.ts";
import { worker } from "./mocks/browser.ts";
const { ToastContainer } = createStandaloneToast();

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "warn",
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={neoTheme}>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
