import React, { useState } from "react";

type Props = {};

function useClients({}: Props) {
	const [sape, mySetSape] = useState(false);
	return {
		sape,
	};
}

export default useClients;
