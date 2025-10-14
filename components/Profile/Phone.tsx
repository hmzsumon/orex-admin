'use client';
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const PhoneNumber = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<div className='card card-compact w-full bg-base-100 shadow-xl'>
			<div className='card-body '>
				<div className='flex items-center justify-between'>
					<h2 className='card-title'>Phone Number</h2>
					<FaUserEdit className=' text-2xl' />
				</div>
				<hr />
				<div className=' px-10'>
					<div className=' flex items-center justify-between'>
						<h3 className='text-lg font-semibold'>Primary Phone Number</h3>
						<div className=' '>
							<p className='text-left'>+{user?.phone}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhoneNumber;
