'use client';
import { maskEmail, maskEmail2, maskPhoneNumber } from '@/utils/functions';
import { CheckIcon, CloseIcon, CloseRedIcon } from '@/utils/icons/CommonIcons';
import {
	AuthenticatorIcon,
	BiometricIcon,
	EmailIcon,
	PhoneIcon,
	PasswordIcon,
} from '@/utils/icons/SecurityIcons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

interface Emil {
	email: string;
}

const TwoFactorAuth = () => {
	const { user } = useSelector((state: any) => state.auth);
	const router = useRouter();
	const items = [
		{
			id: 1,
			icon: <BiometricIcon h={35} w={35} />,
			title: 'Passkeys and Biometrics',
			description:
				'Protect your account and withdrawals with a security key such as Yubikey.',
			callback: () => {},
			btnText: 'Enable',
		},

		{
			id: 2,
			icon: <AuthenticatorIcon h={35} w={35} />,
			title: 'Authenticator App',
			description: 'Protect your account and transactions.',
			callback: () => {},
			btnText: 'Manage',
		},
		{
			id: 3,
			icon: <EmailIcon h={35} w={35} />,
			title: 'Email',
			description: 'Protect your account and transactions.',
			callback: () => {},
			btnText: 'Manage',
			is_done: false,
			done_text: maskEmail(user?.email ? user?.email : 'example@gmail.com'),
		},
		{
			id: 4,
			icon: <PhoneIcon h={35} w={35} />,
			title: 'Phone Number',
			description: 'Protect your account and transactions.',
			callback: () => {
				router.push({
					pathname: '/security-verification',
					query: { email: user?.email, path: '/set-phone' },
				} as any);
			},
			is_done: user?.phone ? true : false,
			done_text: user?.phone ? maskPhoneNumber(user?.phone) : '',
			btnText: 'Manage',
		},
		{
			id: 5,
			icon: <PasswordIcon h={35} w={35} />,
			title: 'Login Password',
			description: 'Login password is used to log in to your account.',
			callback: () => {
				router.push('/change-password');
			},
			is_done: true,
			btnText: 'Manage',
		},
		{
			id: 6,
			icon: <BiometricIcon h={35} w={35} />,
			title: 'Remove Account',
			description:
				'If you want to remove your account, please click the button below.',
			callback: () => router.push('/remove-account'),
			btnText: 'Manage',
		},
	];
	return (
		<div>
			<h1 className='text-2xl font-bold '>Two-Factor Authentication (2FA)</h1>
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
									<p className='text-sm text-gray-400'>{item.description}</p>
								</div>
							</div>

							<div className='flex items-center justify-between w-full gap-x-4'>
								{item.is_done ? (
									<div className='flex items-center space-x-1'>
										<CheckIcon h={5} w={5} color={'#0ecb81'} />
										<p className='text-sm '>
											{item.done_text ? item.done_text : 'ON'}
										</p>
									</div>
								) : (
									<div className='flex items-center space-x-1'>
										<CloseIcon h={5} w={5} color={'#474d57'} />
										<p className='text-sm '>OFF</p>
									</div>
								)}

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

export default TwoFactorAuth;
