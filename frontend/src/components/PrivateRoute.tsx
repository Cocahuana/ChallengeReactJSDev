import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {
	const { isLoggedIn } = useAuth();

	// Outlet will render child elements for routing
	return isLoggedIn() ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute;
