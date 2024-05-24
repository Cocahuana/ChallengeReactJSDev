import Home from "./pages/Home";
import { Text, Button, Box, Grid } from "@chakra-ui/react";
import LoginForm from "./pages/LoginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Error404 from "./components/Error404";

function App() {
	return (
		<Routes>
			{/* Everything inside here needs to be logged in to access */}
			<Route path='/' element={<PrivateRoute />}>
				<Route path='/' element={<Home />} />
			</Route>
			{/* Everything inside here does not needs to be logged in to access */}
			<Route element={<LoginForm />} path='/login' />
			<Route element={<Error404 />} path='*' />
		</Routes>
	);
}

export default App;
