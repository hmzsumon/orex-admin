import { apiSlice } from '../api/apiSlice';

export const ownerApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get owner data
		getOwnerData: builder.query<any, any>({
			query: () => ({
				url: `/dashboard-owner-data`,
				method: 'GET',
			}),
		}),

		// get owner users
		getOwnerUsers: builder.query<any, any>({
			query: () => ({
				url: `/owner-users`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetOwnerDataQuery, useGetOwnerUsersQuery } = ownerApi;
