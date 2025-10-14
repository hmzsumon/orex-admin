import { apiSlice } from '../api/apiSlice';

export const notificationApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get notifications
		getNotifications: builder.query<any, void>({
			query: () => '/admin/notifications',
		}),

		// update notification isRead true
		updateNotification: builder.mutation<any, any>({
			query: (id) => ({
				url: `/admin/notification/${id}`,
				method: 'PUT',
			}),
		}),
	}),
});

export const { useGetNotificationsQuery, useUpdateNotificationMutation } =
	notificationApi;
