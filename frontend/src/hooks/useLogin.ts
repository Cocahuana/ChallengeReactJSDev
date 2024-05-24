import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInstance";
import { User } from "../interfaces/User";
type LoginParams = {
	email: string | undefined;
	password: string | undefined;
};

const calcExpirationTokenInHours = (hours: number) => {
	const seconds = 60;
	const minutes = 60;
	const time = hours * minutes * seconds;
	return time;
};

export const useLogin = () => {
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
			const { token } = response.data;
			localStorage.setItem("session:", token);
			const expirationTimeInSeconds = calcExpirationTokenInHours(24);
			const expirationDate = new Date();
			expirationDate.setTime(
				expirationDate.getTime() + expirationTimeInSeconds * 1000
			);

			// Almacenar la fecha de vencimiento en localStorage
			localStorage.setItem(
				"tokenExpiration",
				expirationDate.getTime().toString()
			);
			return response.data;
		} catch (error: any) {
			console.log(
				"Error - useLogin HOOK:",
				error.response.data.non_field_errors
			);
			throw new Error(error.response.data.non_field_errors);
		}
	};

	return {
		login,
	};
};
