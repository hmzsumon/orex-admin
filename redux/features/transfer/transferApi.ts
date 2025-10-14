import { apiSlice } from '../api/apiSlice';

export const transferApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// send money
		sendMoney: builder.mutation<any, any>({
			query: (body) => ({
				url: '/send-money',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const { useSendMoneyMutation } = transferApi;
