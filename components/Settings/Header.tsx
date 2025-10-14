import React, { useState } from 'react';
import Image from 'next/image';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { formDateWithTime } from '@/utils/functions';
import Link from 'next/link';
import { AiFillCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { CloseIcon } from '@/utils/icons/CommonIcons';

const Header = () => {
	const { user } = useSelector((state: any) => state.auth);
	const [show, setShow] = useState(false);

	const menuItems = [
		{
			id: 1,
			title: 'Two-Factor Authentication (2FA)',
			path: '/security/2fa',
			icon: user?.two_factor_enabled ? (
				<AiOutlineCheckCircle className='text-green-500 h' />
			) : (
				<CloseIcon h={5} w={5} color={'#474d57'} />
			),
		},
		{
			id: 2,
			title: 'Identity Verification',
			path: '/identity-verification',
			icon: user?.identity_verified ? (
				<AiOutlineCheckCircle className='text-green-500' />
			) : (
				<CloseIcon h={5} w={5} color={'#474d57'} />
			),
		},
	];

	return (
		<div className='p-4 bg-black '>
			<div className='space-y-6 '>
				<div>
					<h2 className='text-2xl font-bold'>Security</h2>
				</div>
				<div className='flex flex-col gap-3 md:flex-row'>
					{menuItems.map((item) => (
						<Link key={item.id} href={item.path}>
							<div className='flex items-center gap-x-2'>
								{item.icon}
								<span className='text-sm'>{item.title}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
