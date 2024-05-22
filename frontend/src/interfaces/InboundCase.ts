import { CaseLog } from "./CaseLog";
import { CaseResult } from "./CaseResult";
export interface InboundCase {
	id: number;
	client: {
		id: number;
		name: string;
	};
	case_uuid: string;
	phone: number;
	first_name: string;
	last_name: string;
	code: string | null;
	case_result: CaseResult;
	case_duration: string;
	case_log: CaseLog;
	extra_metadata: {
		dni: string;
		grupo: string;
		orden: string;
	};
	recording: string;
	is_complete: boolean;
	status: string;
	last_updated: string;
	is_active: boolean;
}

export interface InboundCaseResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: InboundCase[];
}
