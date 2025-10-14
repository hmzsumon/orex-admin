import { apiSlice } from '../api/apiSlice';

export const miningApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// start mining
		startMining: builder.mutation<any, any>({
			query: (id) => ({
				url: `/start_mining/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
			async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
				console.log('id', id);
			},
		}),

		// my mining
		myMining: builder.query<any, void>({
			query: () => ({
				url: `/my_mining`,
				method: 'GET',
			}),
			providesTags: ['User', 'Mining'],
		}),
	}),
});

export const { useStartMiningMutation, useMyMiningQuery } = miningApi;
