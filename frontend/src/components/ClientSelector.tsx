import { Box, Button } from "@chakra-ui/react";
import { Client } from "../interfaces/Client";
import { useClients } from "../hooks/useClients";
type ClientSelectorProps = {
	setSelectedClient: (clientId: number) => void;
};

const ClientSelector: React.FC<ClientSelectorProps> = ({
	setSelectedClient,
}) => {
	const { clients } = useClients();
	const handleChange = (clientId: number) => {
		setSelectedClient(clientId);
	};
	console.log("clients", clients);
	return (
		<Box>
			{clients.map((client: Client) => (
				<Button
					key={client.id}
					value={client.id}
					onClick={() => handleChange(client.id)}
				>
					{client.name}
				</Button>
			))}
		</Box>
	);
};

export default ClientSelector;
