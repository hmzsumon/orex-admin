'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import socketIOClient from 'socket.io-client';
import ioBaseUrl from '@/config/ioBaseUrl';
import { Button, Drawer, Accordion } from 'flowbite-react';

// import {
// 	useGetNotificationsQuery,
// 	useUpdateNotificationMutation,
// 	useUpdateNotificationStatusMutation,
// } from '@/redux/features/notify/notificationApi';
import {
	useGetNotificationsQuery,
	useUpdateNotificationMutation,
} from '@/redux/features/notifications/notificationApi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useLoadUserQuery } from '@/redux/features/auth/authApi';
import {
	useGetAdminNotificationsQuery,
	useUpdateAdminNotificationStatusMutation,
} from '@/redux/features/notify/notificationApi';
import Link from 'next/link';

const Notification = () => {
	const { user } = useSelector((state: any) => state.auth);

	const { data, isLoading, isSuccess, isError, error, refetch } =
		useGetAdminNotificationsQuery(undefined);

	const [
		updateAdminNotificationStatus,
		{
			isLoading: isUpdating,
			isError: isUpdatingError,
			isSuccess: isUpdatingSuccess,
			error: updatingError,
		},
	] = useUpdateAdminNotificationStatusMutation();

	const [loadUser, setLadUser] = useState(false);

	useLoadUserQuery(undefined, {
		skip: !loadUser,
	});

	const { notifications } = data || [];
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const [count, setCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [openNotificationId, setOpenNotificationId] = useState(null);
	const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false);
	const [openedNotifications, setOpenedNotifications] = useState<any>([]);
	// console.log('openedNotifications', openedNotifications);
	// set count 9+ if count is greater than 9
	const notificationCount = count > 99 ? '99+' : count;
	useEffect(() => {
		if (isSuccess) {
			setCount(notifications?.length);
		}
	}, [isSuccess, notifications]);

	// handle update notification
	const handleUpdateNotification = async () => {
		// setIsOpen(true);
		const notificationIds = openedNotifications;
		updateAdminNotificationStatus({ notificationIds });
		console.log('openedNotifications', openedNotifications);
	};

	useEffect(() => {
		if (!isOpen && notifications?.length > 0) {
			handleUpdateNotification();
			setOpenedNotifications([]);
		}
	}, [isOpen]);

	// handle open notification
	const handleOpenNotification = (notificationId: any) => {
		setOpen(!open);
		setOpenNotificationId(
			notificationId === openNotificationId ? null : notificationId
		);
		if (!openedNotifications.includes(notificationId)) {
			setOpenedNotifications([...openedNotifications, notificationId]);
		}
	};

	// play notification sound
	const playNotificationSound = useCallback(() => {
		const audio = new Audio('/sounds/admin-notification.wav');
		if (isSoundPlaying) {
			audio.pause();
		} else {
			// audio.loop = true;
			audio.play();
		}
		setIsSoundPlaying(!isSoundPlaying);
	}, [isSoundPlaying]);

	// socket connection
	useEffect(() => {
		const socket = socketIOClient(ioBaseUrl, {
			transports: ['websocket', 'polling'],
		});

		socket.on('connect', () => {
			console.log('connected');
		});
		socket.on('admin-notification', (adminNotification: any) => {
			console.log('notification', adminNotification);
			playNotificationSound();
			refetch();
		});

		socket.on('disconnect', () => {
			console.log('disconnected');
		});

		return () => {
			socket.disconnect();
		};
	}, []);
	return (
		<div className='dark'>
			<div className='relative'>
				{/* Page content here */}

				<IoMdNotifications
					className='text-3xl text-white cursor-pointer '
					// onClick={handleUpdateNotification}
				/>

				{count > 0 && (
					<span
						className={`bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center p-1 absolute -top-1 -right-1 cursor-pointer ${
							count > 99 ? 'text-[.6rem]' : 'text-[.7rem]'
						}`}
						onClick={() => setIsOpen(true)}
					>
						{notificationCount}
					</span>
				)}
			</div>

			<Drawer
				open={isOpen}
				onClose={handleClose}
				position='right'
				className='px-0'
			>
				<Drawer.Header
					className='text-center'
					title='Notifications'
					titleIcon={() => (
						<>
							<IoMdNotifications className='text-xl  cursor-pointer mr-3' />
						</>
					)}
				/>
				<hr />
				<Drawer.Items className=''>
					{notifications?.length > 0 ? (
						<ul className=' rounded-none'>
							{notifications?.map((notification: any) => (
								<li
									key={notification._id}
									className='  px-4  py-2 border-b cursor-pointer text-gray-50 hover:bg-gray-600'
									onClick={() => handleOpenNotification(notification._id)}
								>
									<div className='flex items-center justify-between'>
										<p className='text-gray-50'>{notification.title}</p>
										<MdKeyboardArrowDown
											className={` text-2xl ${
												openNotificationId === notification._id
													? ' rotate-180 transition-transform  duration-150 ease-in-out'
													: ''
											}`}
										/>
									</div>
									{openNotificationId === notification._id && (
										<div className=' flex items-center justify-between  text-xs'>
											<p>
												{notification.message.length > 50
													? notification.message.substring(0, 50) + '...'
													: notification.message}
											</p>
											{notification.url && (
												<Link href={notification.url}>
													<span className='text-blue-500'>View</span>
												</Link>
											)}
										</div>
									)}
								</li>
							))}
						</ul>
					) : (
						<div>
							<Image
								src='/no-notifications.webp'
								width={200}
								height={200}
								alt='No-notification'
								className='mx-auto my-4'
							/>
							<p className='text-center text-gray-500'>No notifications</p>
						</div>
					)}
				</Drawer.Items>
			</Drawer>
		</div>
	);
};

export default Notification;
