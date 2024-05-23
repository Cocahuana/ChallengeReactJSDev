import React, { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { useLogin } from "../hooks/useLogin";
type Props = {};

function LoginPage(props: Props) {
	const [user, setUser] = useState<User | null>(null);
	const { loginUser } = useLogin();

	useEffect(() => {
		const getData = async () => {
			const response: User | undefined = await loginUser();
			if (!response) {
				throw new Error("Failed to Get login");
			}
			setUser(response);
		};
		if (!user) {
			getData();
		}
		console.log("datos Usuario", user);
	}, [user, loginUser]);
	return <div>LoginPage</div>;
}

export default LoginPage;
