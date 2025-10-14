import { apiSlice } from '../api/apiSlice';
import { setUser, logoutUser } from '../auth/authSlice';

export const adminApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get users from api with typescript
		getUsers: builder.query<any, void>({
			query: () => '/users',
			providesTags: ['Users'],
		}),

		// get user by id
		getUserById: builder.query<any, string>({
			query: (id) => `/get-user-by-customer-id/${id}`,
		}),

		//admin login
		adminLogin: builder.mutation<any, { email: string; password: string }>({
			query: ({ email, password }) => ({
				url: '/admin/login',
				method: 'POST',
				body: { email, password },
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					dispatch(setUser(result.data));
				} catch (error) {
					error as any;
				}
			},
		}),

		// admin dashboard data
		getAdmindashboardData: builder.query<any, any>({
			query: () => ({
				url: '/admin-dashboarg-data',
				method: 'GET',
			}),
		}),

		// deposit from admin
		depositFromAdmin: builder.mutation<
			any,
			{ customer_id: string; amount: number }
		>({
			query: ({ customer_id, amount }) => ({
				url: '/deposit-from-admin',
				method: 'POST',
				body: { customer_id, amount },
			}),
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserByIdQuery,
	useAdminLoginMutation,
	useGetAdmindashboardDataQuery,
	useDepositFromAdminMutation,
} = adminApi;
