export interface CaseLog {
	responses: {
		text: string;
		time: number;
		confidence: number;
	}[];
	result_id: number;
	commitment: string;
	got_promise: boolean;
	transcription: {
		text: string;
		time: number;
		confidence: number;
	}[];
	final_sip_code: number;
}
