// src/components/LoginForm.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { User } from "../interfaces/User";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { loginUser, error } = useAuth();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const response: User | null = await loginUser(email, password);
		console.log("Succesfully logged in: ", response);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<button type='submit'>Login</button>
			{error && <p>{error}</p>}
		</form>
	);
}

export default LoginForm;
