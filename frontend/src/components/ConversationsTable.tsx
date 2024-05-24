import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from "@chakra-ui/react";

interface ConversationsTableProps {
	clientId: number | null;
	startDate: string;
	endDate: string;
}

interface Conversation {
	id: number;
	caseId: string;
	phone: string;
	dni: string;
	group: string;
	order: string;
	duration: string;
	status: string;
}

const ConversationsTable: React.FC<ConversationsTableProps> = ({
	clientId,
	startDate,
	endDate,
}) => {
	const [conversations, setConversations] = useState<Conversation[]>([]);

	useEffect(() => {
		if (clientId && startDate && endDate) {
			// Aquí deberías hacer una llamada a la API para obtener las conversaciones
			const fetchConversations = async () => {
				// Ejemplo de datos
				const conversationsData: Conversation[] = [
					{
						id: 1,
						caseId: "1234",
						phone: "123456789",
						dni: "12345678",
						group: "Group 1",
						order: "Order 1",
						duration: "00:01:23",
						status: "Status 1",
					},
					// Agregar más datos
				];
				setConversations(conversationsData);
			};

			fetchConversations();
		}
	}, [clientId, startDate, endDate]);

	return (
		<Box>
			{conversations.length > 0 ? (
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>ID Caso</Th>
							<Th>Teléfono</Th>
							<Th>DNI</Th>
							<Th>Grupo</Th>
							<Th>Orden</Th>
							<Th>Duración</Th>
							<Th>Estado</Th>
						</Tr>
					</Thead>
					<Tbody>
						{conversations.map((conversation) => (
							<Tr key={conversation.id}>
								<Td>{conversation.caseId}</Td>
								<Td>{conversation.phone}</Td>
								<Td>{conversation.dni}</Td>
								<Td>{conversation.group}</Td>
								<Td>{conversation.order}</Td>
								<Td>{conversation.duration}</Td>
								<Td>{conversation.status}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			) : (
				<Text>
					No hay conversaciones disponibles para los criterios
					seleccionados.
				</Text>
			)}
		</Box>
	);
};

export default ConversationsTable;
