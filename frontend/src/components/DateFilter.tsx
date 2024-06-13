import { Box, Input } from "@chakra-ui/react";
import React from "react";

interface DateFilterProps {
	startDate: string;
	endDate: string;
	onStartDateChange: (date: string) => void;
	onEndDateChange: (date: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({
	startDate,
	endDate,
	onStartDateChange,
	onEndDateChange,
}) => {
	const toISODate = (dateStr: string): string => {
		const [day, month, year] = dateStr.split("/");
		return `${year}-${month}-${day}`;
	};

	const toDisplayDate = (dateStr: string): string => {
		const [year, month, day] = dateStr.split("-");
		return `${day}/${month}/${year}`;
	};

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isoDate = e.target.value;
		const formattedDate = toDisplayDate(isoDate);
		onStartDateChange(formattedDate);
	};

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isoDate = e.target.value;
		const formattedDate = toDisplayDate(isoDate);
		onEndDateChange(formattedDate);
	};

	return (
		<Box>
			<Input
				type='date'
				value={toISODate(startDate)}
				onChange={handleStartDateChange}
				mr={2}
			/>
			<Input
				type='date'
				value={toISODate(endDate)}
				onChange={handleEndDateChange}
			/>
		</Box>
	);
};

export default DateFilter;
