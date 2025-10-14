import { apiSlice } from '../api/apiSlice';

export const withdrawApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// create new withdraw request
		createWithdrawRequest: builder.mutation<any, any>({
			query: (body) => ({
				url: `/new/withdraw`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['User', 'Withdraws'],
		}),

		// get  my withdraw requests
		getMyWithdrawRequests: builder.query<any, any>({
			query: () => `/my-withdraws`,
			providesTags: ['Withdraws'],
		}),

		// get all withdraw requests
		getAllWithdrawRequests: builder.query<any, any>({
			query: () => `/admin/withdraws`,
			providesTags: ['Withdraws'],
		}),

		// get single withdraw request
		getSingleWithdrawRequest: builder.query<any, any>({
			query: (id) => `/admin/withdraw/${id}`,
			providesTags: ['Withdraws'],
		}),

		// approve withdraw request
		approveWithdraw: builder.mutation<any, any>({
			query: (body) => ({
				url: `/withdraw/approve`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Withdraws'],
		}),

		// reject withdraw request
		rejectWithdraw: builder.mutation<any, any>({
			query: (body) => ({
				url: `/withdraw/reject`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Withdraws'],
		}),

		// get all pending withdraw requests
		getPendingWithdraws: builder.query<any, any>({
			query: () => `/admin/pending-withdraws`,
			providesTags: ['Withdraws'],
		}),
	}),
});

export const {
	useCreateWithdrawRequestMutation,
	useGetMyWithdrawRequestsQuery,
	useGetAllWithdrawRequestsQuery,
	useGetSingleWithdrawRequestQuery,
	useApproveWithdrawMutation,
	useRejectWithdrawMutation,
	useGetPendingWithdrawsQuery,
} = withdrawApi;
