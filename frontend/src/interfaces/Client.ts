import { User } from "./User";

export interface Client {
	id: number;
	name: string;
	users: User[];
}
