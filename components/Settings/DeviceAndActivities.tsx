'use client';
import { formDateWithTime, maskEmail, maskEmail2 } from '@/utils/functions';
import { CheckIcon, CloseIcon, CloseRedIcon } from '@/utils/icons/CommonIcons';
import {
	AuthenticatorIcon,
	BiometricIcon,
	EmailIcon,
	PhoneIcon,
	PasswordIcon,
	DeviceIcon,
	ActivityIcon,
} from '@/utils/icons/SecurityIcons';
import React from 'react';
import { useSelector } from 'react-redux';

interface Emil {
	email: string;
}

const DeviceAndActivity = () => {
	const { user } = useSelector((state: any) => state.auth);

	const items = [
		{
			id: 1,
			icon: <DeviceIcon h={35} w={35} />,
			title: 'Device Management',
			description: 'Manage devices allowed to access your account.',
			callback: () => {},
			btnText: 'Enable',
		},

		{
			id: 2,
			icon: <ActivityIcon h={35} w={35} />,
			lastLogin: formDateWithTime(user?.last_login_info?.date),
			title: 'Account Activity',
			description: 'Protect your account and transactions.',
			callback: () => {},
			btnText: 'More',
		},
	];
	return (
		<div>
			<h1 className='text-2xl font-bold '>Devices and Activities</h1>
			<div>
				{items.map((item) => {
					return (
						<div
							key={item.id}
							className='flex flex-col items-center gap-4 px-2 py-6 my-4 border-b border-gray-500 md:flex-row '
						>
							<div className='flex w-full gap-4'>
								{item.icon}
								<div>
									<h2 className='text-lg font-semibold'>{item.title}</h2>
									{item.lastLogin && (
										<p className='text-sm text-gray-400'>
											Last login: {item.lastLogin}
										</p>
									)}
									<p className='text-sm text-gray-400'>{item.description}</p>
								</div>
							</div>

							<div className='flex items-center justify-between w-full gap-x-4'>
								<div></div>
								<div className=''>
									<button
										onClick={item.callback}
										className=' w-[80px] py-2  text-sm text-white bg-[#474d57] hover:bg-[#2b3139] rounded'
									>
										{item.btnText}
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DeviceAndActivity;
