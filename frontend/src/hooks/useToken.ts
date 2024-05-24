import React, { useState } from "react";
import { Client } from "../interfaces/Client";
import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInstance";

export const useToken = () => {
	const token = localStorage.getItem("session");
	return {
		token,
	};
};
