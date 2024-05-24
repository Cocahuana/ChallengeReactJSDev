import { Box, Input } from "@chakra-ui/react";

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
	return (
		<Box>
			<Input
				type='date'
				placeholder='Desde'
				value={startDate}
				onChange={(e) => onStartDateChange(e.target.value)}
				mr={2}
			/>
			<Input
				type='date'
				placeholder='Hasta'
				value={endDate}
				onChange={(e) => onEndDateChange(e.target.value)}
			/>
		</Box>
	);
};

export default DateFilter;
