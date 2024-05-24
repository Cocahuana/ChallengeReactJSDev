import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { User } from "../interfaces/User";
import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
} from "@chakra-ui/react";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { loginUser, error } = useAuth();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		const response: User | null = await loginUser(email, password);
		setLoading(false);
		console.log("Succesfully logged in: ", response);
	};

	return (
		<Flex justify='center'>
			<Box w='400px' p='4' borderWidth='1px' borderRadius='md'>
				<form onSubmit={handleSubmit}>
					<FormControl isRequired>
						<FormLabel>Email:</FormLabel>
						<Input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Enter your email'
						/>
					</FormControl>
					<FormControl isRequired mt='4'>
						<FormLabel>Password:</FormLabel>
						<Input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Enter your password'
						/>
					</FormControl>
					<Button
						type='submit'
						mt='4'
						colorScheme='blue'
						isLoading={loading}
						loadingText='Logging in...'
					>
						Login
					</Button>
					{error && (
						<Text color='red.500' mt='2'>
							{error}
						</Text>
					)}
				</form>
			</Box>
		</Flex>
	);
}

export default LoginForm;
