'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { FcMoneyTransfer } from 'react-icons/fc';

const UserBalance = () => {
	const { user } = useSelector((state: any) => state.auth);
	return (
		<div>
			{/* <!-- User Balance --> */}
			<div className='flex items-center'>
				<span className='font-bold'>
					<FcMoneyTransfer />
				</span>
				<span className='ml-1 text-sm font-bold text-primary'>
					{(user?.m_balance ? user.m_balance : 0).toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</span>
			</div>
		</div>
	);
};

export default UserBalance;
