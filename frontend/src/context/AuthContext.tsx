import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLogin } from "../hooks/useLogin";
import { User } from "../interfaces/User";

interface AuthContextProps {
	user: User | null;
	error: string | null;
	loginUser: (email: string, password: string) => Promise<User | null>;
	logoutUser: () => void;
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
			setError("ERROR - LOGIN - POST: " + err.message);
			setUser(null);
			return null;
		}
	};

	const logoutUser = () => {
		setUser(null);
		setError(null);
	};

	return (
		<AuthContext.Provider value={{ user, error, loginUser, logoutUser }}>
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
