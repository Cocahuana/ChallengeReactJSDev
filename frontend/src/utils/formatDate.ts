export const formatDate = (date: Date): string => {
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
};

export const parseDate = (dateStr: string): string => {
	const [year, month, day] = dateStr.split("-");
	return `${day}/${month}/${year}`;
};

export const toISODate = (dateStr: string): string => {
	const [day, month, year] = dateStr.split("/");
	return `${day}/${month}/${year}`;
};
