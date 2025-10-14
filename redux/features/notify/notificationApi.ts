import { apiSlice } from '../api/apiSlice';

export const notificationApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNotifications: builder.query({
			query: () => '/user-notifications',
			providesTags: ['Notification'],
		}),

		//get admin notifications
		getAdminNotifications: builder.query({
			query: () => '/admin/notifications',
			providesTags: ['Notification'],
		}),

		// updateNotification
		updateNotification: builder.mutation({
			query: (id) => ({
				url: `/update/notifications/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Notification'],
		}),

		// update notification is_read status
		updateNotificationStatus: builder.mutation({
			query: () => ({
				url: `/update-all-notifications`,
				method: 'PUT',
			}),
			invalidatesTags: ['Notification'],
		}),

		// update admin notification is_opened status
		updateAdminNotificationStatus: builder.mutation({
			query: (body) => ({
				url: `/admin/notifications`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Notification'],
		}),
	}),
});

export const {
	useGetNotificationsQuery,
	useGetAdminNotificationsQuery,
	useUpdateNotificationMutation,
	useUpdateNotificationStatusMutation,
	useUpdateAdminNotificationStatusMutation,
} = notificationApi;
