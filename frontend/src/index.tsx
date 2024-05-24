import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import {
	ChakraBaseProvider,
	extendBaseTheme,
	theme as chakraTheme,
} from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
	components: {
		Button,
	},
});
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraBaseProvider theme={theme}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ChakraBaseProvider>
		</BrowserRouter>
	</React.StrictMode>
);
serviceWorker.unregister();
