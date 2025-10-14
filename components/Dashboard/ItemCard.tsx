'use client';

import { Card } from 'flowbite-react';
import React from 'react';
import { FaFilterCircleDollar } from 'react-icons/fa6';
import { formatBalance } from '@/lib/functions';

const ItemCard = ({ icon, title, balance, is_balance }: any) => {
	return (
		<div>
			<Card className=' w-full'>
				<div className=' flex gap-4 items-center'>
					<div className='max-w-sm rounded overflow-hidden shadow-lg p-4  flex items-center justify-center'>
						<span className=' text-2xl text-blue-500'>{icon}</span>
					</div>
					<div>
						<h5 className='text-xl font-semibold tracking-tight text-gray-700 dark:text-white'>
							{title}
						</h5>

						{is_balance ? (
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								{formatBalance(balance ? balance : 0)} USDT
							</p>
						) : (
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								{balance}
							</p>
						)}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ItemCard;
