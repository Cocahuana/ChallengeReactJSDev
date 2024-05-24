import React, { createContext, useContext, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { User } from "../interfaces/User";

interface AuthContextProps {
	user: User | null;
	error: string | null;
	loginUser: (email: string, password: string) => Promise<User | null>;
	logoutUser: () => void;
	isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthProvider = (props: AuthProviderProps) => {
	const { children } = props;
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);
	const { login } = useLogin();

	const loginUser = async (email: string, password: string) => {
		try {
			const userData = await login({ email, password });
			setUser(userData);
			setError(null);
			return userData;
		} catch (err: any) {
			setError("ERROR - LOGIN: " + err.message);
			setUser(null);
			return null;
		}
	};

	const logoutUser = () => {
		localStorage.removeItem("session");
		localStorage.removeItem("tokenExpiration");
		setUser(null);
		setError(null);
	};

	const getTokenExpiration = () => {
		const expiration = localStorage.getItem("tokenExpiration");
		if (!expiration) return null;
		const expirationDate = parseInt(expiration);
		return new Date(expirationDate);
	};

	const isTokenExpired = () => {
		const expirationDate = getTokenExpiration();
		if (!expirationDate) return true; // If there is no expiration date, consider the token to have expired
		return expirationDate < new Date();
	};
	const isLoggedIn = () => {
		return !isTokenExpired();
	};
	return (
		<AuthContext.Provider
			value={{ user, error, loginUser, logoutUser, isLoggedIn }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
