import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DisplayGate, SDKInitOptions, SDKProvider } from "@tma.js/sdk-react";
import { SDKProviderError } from "./components/sdk/SDKError.tsx";
import { SDKProviderLoading } from "./components/sdk/SDKLoading.tsx";
import { SDKInitialState } from "./components/sdk/SDKInit.tsx";

const options: SDKInitOptions = {
  acceptCustomStyles: true,
  cssVars: true,
  async: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SDKProvider options={options}>
      <DisplayGate error={SDKProviderError} loading={SDKProviderLoading} initial={SDKInitialState}>
        <App />
      </DisplayGate>
    </SDKProvider>
  </React.StrictMode>
);
