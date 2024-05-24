import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInstance";
import { User } from "../interfaces/User";

type LoginParams = {
	email: string | undefined;
	password: string | undefined;
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
			return response.data;
		} catch (error: any) {
			throw new Error("Failed to login: " + error.message);
		}
	};

	return {
		login,
	};
};
