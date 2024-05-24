import { Client } from "../interfaces/Client";
import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInstance";
import { useToken } from "./useToken";
import { useEffect, useState } from "react";

export const useClients = () => {
	const { token } = useToken();
	const [clients, setClients] = useState<Client[]>([]);
	const [error, setError] = useState(null);
	const LoginURL = "/clients/";
	const config = {
		headers: {
			authorization: `JWT ${token}`,
		},
	};

	useEffect(() => {
		const getClients = async () => {
			try {
				const response: AxiosResponse<Client[]> =
					await axiosInstance.get(LoginURL, config);
				if (!response.data) {
					throw new Error("Failed to GET - Clients");
				}
				setClients(response.data);
				setError(null);
			} catch (error: any) {
				console.log("Error - useClients HOOK:", error);
				throw new Error(error);
			}
		};
		getClients();
	}, []);

	return {
		clients,
		error,
	};
};
