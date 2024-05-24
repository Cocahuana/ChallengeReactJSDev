import { useState } from "react";
import { User } from "../interfaces/User";
import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInstance";
type LoginParams = {
	email: string | undefined;
	password: string | undefined;
};

export const useLogin = () => {
	//  TODO: remove from here env data when development is finished

	const EMAIL = process.env.REACT_APP_EMAIL;
	const PASSWORD = process.env.REACT_APP_PASSWORD;
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);
	const login = async (credentials: LoginParams): Promise<User> => {
		const LoginURL = "/api/v1/login/";
		try {
			const response: AxiosResponse<User> = await axiosInstance.post(
				LoginURL,
				credentials
			);
			if (!response.data) {
				throw new Error("Failed to login");
			}
			return response.data;
		} catch (error) {
			throw new Error("Failed to login: " + error);
		}
	};

	const loginUser = async () => {
		try {
			const credentials = { email: EMAIL, password: PASSWORD };
			//  TODO: replace when development is finished final app
			// const credentials: LoginParams = { email, password };

			const userData = await login(credentials);
			setUser(userData);
			setError(null);
			return userData;
		} catch (err) {
			setError("ERROR - LOGIN - POST: " + err);
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
