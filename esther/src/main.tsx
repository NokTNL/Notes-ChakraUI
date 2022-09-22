import React from "react";
import ReactDOM from "react-dom/client";
import App from "./40-project/App";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Simply wrapp ChakraProvider around the App to use it. It will inject some default styles to the HTML elements (e.g. the font family) */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
