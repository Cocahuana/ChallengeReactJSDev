import React, { useEffect, useState } from "react";
import { useClients } from "../hooks/useClients";
import { Client } from "../interfaces/Client";

function Home() {
	const { clients, error } = useClients();

	useEffect(() => {
		console.log("clients: ", clients);
	}, [clients]);

	return (
		<div>
			{clients.length > 0 ? <div>11</div> : <p>No clients found</p>}
		</div>
	);
}

export default Home;
