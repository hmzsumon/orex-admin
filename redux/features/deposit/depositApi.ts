import { apiSlice } from '../api/apiSlice';

export const depositApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// create deposit request
		createDepositRequest: builder.mutation<any, any>({
			query: (body) => ({
				url: '/new/deposit',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Deposits'],
		}),

		// get my deposits
		getMyDeposits: builder.query<any, any>({
			query: () => '/deposits/me',
			providesTags: ['Deposits'],
		}),

		// get single deposit
		getDeposit: builder.query<any, any>({
			query: (id) => `/deposit/${id}`,
			providesTags: ['Deposits'],
		}),

		// get active deposit method
		getActiveDepositMethod: builder.query<any, any>({
			query: () => '/deposit-method/active',
		}),

		// get admin deposits
		getAdminDeposits: builder.query<any, any>({
			query: () => '/admin/deposits',
			providesTags: ['Deposits'],
		}),
	}),
});

export const {
	useCreateDepositRequestMutation,
	useGetMyDepositsQuery,
	useGetDepositQuery,
	useGetActiveDepositMethodQuery,
	useGetAdminDepositsQuery,
} = depositApi;
