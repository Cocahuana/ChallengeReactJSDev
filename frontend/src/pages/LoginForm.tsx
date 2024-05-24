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
	InputGroup,
	InputRightElement,
	useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { loginUser, error } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		const response: User | null = await loginUser(email, password);
		setLoading(false);
		if (response) {
			toast({
				title: "Login successful! You will be redirected...",
				status: "success",
				duration: 2000,
				isClosable: true,
				onCloseComplete: () => {
					navigate("/");
				},
			});
		}
	};

	return (
		<Box minH={{ base: "100vh" }} bg='gray.50'>
			<Flex
				minH={{ base: "100vh" }}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Box
					w={{ base: "80%", md: "50%", lg: "40%", xl: "30%" }}
					h={{ base: "60vh" }}
					borderWidth={1}
					borderRadius='lg'
					boxShadow='lg'
					bg='white'
				>
					<form
						onSubmit={handleSubmit}
						style={{ width: "100%", height: "100%" }}
					>
						<Flex
							flexDir={"column"}
							h='100%'
							justify={"center"}
							alignItems={"center"}
							gap={{ base: 4, md: 6, xl: 8 }}
							p={{ base: "4", md: "8" }}
						>
							<Text
								fontSize={{
									base: "x-large",
									md: "xx-large",
									xl: "2.5rem",
								}}
								fontWeight={"bold"}
								textAlign={"center"}
							>
								Welcome to Inceptia!
							</Text>
							<FormControl
								isRequired
								w={{ base: "100%", lg: "80%" }}
							>
								<FormLabel fontSize={{ lg: "18px" }}>
									Email
								</FormLabel>
								<Input
									w={{ base: "100%" }}
									fontSize={{ lg: "1rem" }}
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='great.developer@inceptia.com'
								/>
							</FormControl>
							<FormControl
								isRequired
								w={{ base: "100%", lg: "80%" }}
								fontSize={{ lg: "1rem" }}
							>
								<FormLabel fontSize={{ lg: "18px" }}>
									Password
								</FormLabel>
								<InputGroup>
									<Input
										w={{ base: "100%" }}
										fontSize={{ base: "medium" }}
										type={
											showPassword ? "text" : "password"
										}
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										placeholder='12345678 is a great password'
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword(
													(showPassword) =>
														!showPassword
												)
											}
										>
											{showPassword ? (
												<ViewIcon />
											) : (
												<ViewOffIcon />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Button
								type='submit'
								mt='4'
								colorScheme='blue'
								isLoading={loading}
								loadingText='Logging in...'
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
							>
								Sign in
							</Button>
							{error && (
								<Text color='red.500' mt='2'>
									{error}
								</Text>
							)}
						</Flex>
					</form>
				</Box>
			</Flex>
		</Box>
	);
}

export default LoginForm;
