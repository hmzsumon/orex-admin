import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8000/api/v1'
		: 'https://pyc-trade-api-de5130f4c952.herokuapp.com/api/v1';

console.log('baseUrl', baseUrl);
export const apiSlice = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		// Introduce an artificial delay using `setTimeout`
		prepareHeaders: async (headers, { getState, endpoint }: any) => {
			const token = getState()?.auth?.token;
			// console.log('token', token);
			if (token) {
				headers.set('token', `${token}`);
			}
			return headers;
		},
	}),
	tagTypes: [
		'Users',
		'Admin',
		'Pxc',
		'Wallet',
		'Transactions',
		'User',
		'Withdraw',
		'Withdraws',
		'MyWithdraws',
		'Mining',
		'Deposits',
		'Notification',
		'Notifications',
		'Kyc',
	],
	endpoints: (builder) => ({}),
});

//https://wfc-api.herokuapp.com/api/v1
//http://localhost:5005/api/v1
