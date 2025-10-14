import { apiSlice } from '../api/apiSlice';

export const kycApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get user kyc
		getUserKyc: builder.query<any, void>({
			query: () => ({
				url: `/admin/verifications`,
				method: 'GET',
			}),
			providesTags: ['User', 'Kyc'],
		}),

		// get user kyc
		getSingleUserKyc: builder.query<any, void>({
			query: (id) => ({
				url: `/admin/verification/${id}`,
				method: 'GET',
			}),
			providesTags: ['User', 'Kyc'],
		}),

		//approve kyc verification
		approveKyc: builder.mutation<any, any>({
			query: (id) => ({
				url: `/verification/approve/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: ['User', 'Kyc'],
		}),

		// reject kyc verification
		rejectKyc: builder.mutation<any, any>({
			query: (body) => ({
				url: `/reject/verification`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['User', 'Kyc'],
		}),
	}),
});

export const {
	useGetUserKycQuery,
	useGetSingleUserKycQuery,
	useApproveKycMutation,
	useRejectKycMutation,
} = kycApi;
