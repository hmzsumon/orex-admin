import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type fetchBaseQueryError = FetchBaseQueryError & {
	data: {
		message: string;
	};
};
