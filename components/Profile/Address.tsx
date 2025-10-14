'use client';
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Address = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<div className='card card-compact w-full bg-base-100 shadow-xl'>
			<div className='card-body '>
				<div className='flex items-center justify-between'>
					<h2 className='card-title'>Address</h2>
					<FaUserEdit className=' text-2xl' />
				</div>
				<hr />
				<div className=' px-10'>
					<div className=' flex items-center justify-between'>
						<h3 className=' font-semibold'>Address Line 1</h3>
						<div className=' '>
							<p className='text-left'>Not available</p>
						</div>
					</div>
					<div className=' flex items-center justify-between'>
						<h3 className=' font-semibold'>Address line 2 (optional)</h3>
						<div className=' '>
							<p className='text-left'>Not available</p>
						</div>
					</div>

					<div className=' flex items-center justify-between'>
						<h3 className=' font-semibold'>City/Town</h3>
						<div className=' '>
							<p className='text-left'>Not available</p>
						</div>
					</div>

					<div className=' flex items-center justify-between'>
						<h3 className=' font-semibold'>Postal/ZIP code</h3>
						<div className=' '>
							<p className='text-left'>Not available</p>
						</div>
					</div>

					<div className=' flex items-center justify-between'>
						<h3 className=' font-semibold'>Country</h3>
						<div className=' '>
							<p className='text-left'>{user?.country}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;
