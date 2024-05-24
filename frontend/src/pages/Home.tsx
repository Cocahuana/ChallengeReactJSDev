import React, { useEffect, useState } from "react";
import { useClients } from "../hooks/useClients";
import { Client } from "../interfaces/Client";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import ClientSelector from "../components/ClientSelector";
import ConversationsTable from "../components/ConversationsTable";
import DateFilter from "../components/DateFilter";

function Home() {
	const [selectedClient, setSelectedClient] = useState<number | null>(null);
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");

	const handleOnSelectCallBack = (clientId: number) => {
		setSelectedClient(clientId);
	};

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
						startDate=''
						endDate=''
						onStartDateChange={() => {}}
						onEndDateChange={() => {}}
					/>
				</Box>
			</GridItem>

			<GridItem area='conversation'>
				<Box bg='gray.50' p={4}>
					<ConversationsTable
						clientId={null}
						startDate=''
						endDate=''
					/>
				</Box>
			</GridItem>
		</Grid>
	);
}

export default Home;
