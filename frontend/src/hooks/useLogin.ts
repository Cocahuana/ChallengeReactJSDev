import { useState } from "react";
import { User } from "../interfaces/User";
import axios from "axios";
type LoginParams = {
	email: string | undefined;
	password: string | undefined;
};

export const useLogin = () => {
	const EMAIL = process.env.REACT_APP_EMAIL;
	const PASSWORD = process.env.REACT_APP_PASSWORD;
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);

	const login = async (credentials: LoginParams): Promise<User> => {
		const LoginURL = "https://admindev.inceptia.ai/api/v1/login/";
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await axios.post(LoginURL, credentials, config);
		if (!response.data) {
			throw new Error("Failed to login");
		}

		const data: User = response.data;
		return data;
	};

	const loginUser = async () => {
		try {
			const credentials = { email: EMAIL, password: PASSWORD };
			const userData = await login(credentials);
			setUser(userData);
			setError(null);
			return userData;
		} catch (err) {
			setError("ERROR - LOGIN - POST: Failed to login");
			setUser(null);
		}
	};
	const logoutUser = () => {
		setUser(null);
		setError(null);
	};
	return {
		user,
		error,
		loginUser,
		logoutUser,
	};
};
