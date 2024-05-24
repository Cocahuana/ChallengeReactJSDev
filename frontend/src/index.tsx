import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
serviceWorker.unregister();
