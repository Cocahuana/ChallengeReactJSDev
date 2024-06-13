// Home.tsx
import React, { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ClientSelector from "../components/ClientSelector";
import ConversationsTable from "../components/ConversationsTable";
import DateFilter from "../components/DateFilter";
import { formatDate, toISODate } from "../utils/formatDate";

function Home() {
	const today = new Date();
	const [selectedClient, setSelectedClient] = useState<number | null>(null);
	const [startDate, setStartDate] = useState<string>(formatDate(today));
	const [endDate, setEndDate] = useState<string>(formatDate(today));

	const handleOnSelectCallBack = (clientId: number) => {
		setSelectedClient(clientId);
	};

	const handleOnStartDateCallBack = (date: string) => {
		setStartDate(date);
	};

	const handleOnEndDateCallBack = (date: string) => {
		setEndDate(date);
	};

	console.log("Home view: ", selectedClient, startDate, endDate);

	return (
		<Grid
			bg={"red.200"}
			templateAreas={{
				base: `
				"sidebar"
				"detalle"
                 "conversation"
				 `,
				lg: `"sidebar detalle"
               "sidebar conversation"
               "sidebar conversation"`,
			}}
			gridTemplateRows={{ base: "auto", lg: "50px 1fr 30px" }}
			gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
			minH='100vh'
			gap='4'
		>
			<GridItem area='sidebar'>
				<Box bg='gray.200' p={4}>
					<ClientSelector
						setSelectedClient={handleOnSelectCallBack}
					/>
				</Box>
			</GridItem>
			<GridItem area='detalle'>
				<Box bg='gray.100' p={4}>
					<DateFilter
						startDate={startDate}
						endDate={endDate}
						onStartDateChange={handleOnStartDateCallBack}
						onEndDateChange={handleOnEndDateCallBack}
					/>
				</Box>
			</GridItem>

			<GridItem area='conversation'>
				<Box bg='gray.50' p={4}>
					<ConversationsTable
						clientId={selectedClient}
						startDate={toISODate(startDate)}
						endDate={toISODate(endDate)}
					/>
				</Box>
			</GridItem>
		</Grid>
	);
}

export default Home;
