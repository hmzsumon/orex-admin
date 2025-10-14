'use client';
import ItemCard from '@/components/Dashboard/ItemCard';
import { formatBalance } from '@/lib/functions';
import { useGetOwnerDataQuery } from '@/redux/features/owner/ownerApi';
import { useGetAdmindashboardDataQuery } from '@/redux/features/admin/adminApi';
import { Button, Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { FaUsers, FaWallet } from 'react-icons/fa';
import { FaFilterCircleDollar, FaHandHoldingDollar } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiDownloadSimpleBold, PiWarningLight } from 'react-icons/pi';
import { BiLogoMicrosoftTeams } from 'react-icons/bi';
import { RiGlobalFill } from 'react-icons/ri';
import { CiInboxOut } from 'react-icons/ci';

const Dashboard = () => {
	const { data, isLoading } = useGetAdmindashboardDataQuery(undefined);
	const { company } = data || {};
	// console.log(owner, company);

	return (
		<div className=' z-0 px-2 '>
			<div className='py-4  '>
				{/*Start Balance Card */}
				{/* <Card href='#' className='w-full'>
					<div className='py-5'>
						<div className='flex items-center justify-between'>
							<div className=' md:col-span-1 grid md:flex gap-2 items-center'>
								<Card className=' w-20 h-20 rounded-full  flex items-center justify-center'>
									<FaWallet className=' text-icm-green text-3xl' />
								</Card>
								<p className='uppercase md:mb-0 mb-5 text-lg text-slate-600'>
									<span className='font-semibold text-xl text-black'>
										{formatBalance(owner?.o_balance)}
									</span>{' '}
									USDT
								</p>
							</div>
							<Link href='/withdraw'>
								<Button
									gradientDuoTone='purpleToBlue'
									className=' w-full flex items-center gap-2'
								>
									<span className='text-xl mr-2'>
										{' '}
										<FaHandHoldingDollar />
									</span>{' '}
									Withdraw
								</Button>
							</Link>
						</div>
					</div>
				</Card> */}
				{/*End Balance Card */}
				<div className=' my-6 grid md:grid-cols-2 gap-4'>
					<ItemCard
						icon={<GiReceiveMoney />}
						title='Total Deposit'
						balance={company?.deposit?.total_deposit_amount}
						is_balance={true}
					/>

					<ItemCard
						icon={<FaWallet />}
						title='Today Deposit'
						balance={company?.deposit?.today_deposit_amount}
						is_balance={true}
					/>
					<ItemCard
						icon={<CiInboxOut />}
						title='Total Withdraw'
						balance={company?.withdraw?.total_withdraw_amount}
						is_balance={true}
					/>
					<ItemCard
						icon={<CiInboxOut />}
						title='Today Withdraw'
						balance={company?.withdraw?.today_withdraw_amount}
						is_balance={true}
					/>

					<ItemCard
						icon={<FaUsers />}
						title='Total Users'
						balance={company?.users.total_users}
						is_balance={false}
					/>
					<ItemCard
						icon={<FaUsers />}
						title='Total Active Users'
						balance={company?.users?.total_active_users}
						is_balance={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
