'use client';
import CopyToClipboard from '@/lib/CopyToClipboard';
import { useGetUserByIdQuery } from '@/redux/features/admin/adminApi';
import { Card, ListGroup } from 'flowbite-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { GridLoader } from 'react-spinners';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const UserDetails = ({ params }: any) => {
	const { id } = params;
	const { data, isLoading, isError, isSuccess, error } =
		useGetUserByIdQuery(id);
	const { user, wallet } = data || {};

	return (
		<div>
			<h1 className=' text-2xl font-semibold text-center'>User details </h1>
			<div>
				{isLoading ? (
					<div className='flex justify-center items-center my-6'>
						<GridLoader color='#2563EB' size={30} />
					</div>
				) : (
					<div className=' my-4 space-y-4'>
						{/* Start User info */}
						<div>
							<h3 className=' font-bold ml-2 my-1'>
								User Info
								<span>
									{user?.is_active ? (
										<span className=' text-green-500 ml-2'>Active</span>
									) : (
										<span className=' text-red-500 ml-2'>Inactive</span>
									)}
								</span>
							</h3>
							<ListGroup>
								<ListGroup.Item>
									<span className=' flex gap-4'>
										<span>User name:</span>
										<span className=' font-bold'>{user?.name || 'N/A'}</span>
									</span>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className=' flex gap-4 items-center'>
										<span>User Id:</span>
										<span className='flex items-center gap-1 font-bold'>
											{user?.customer_id || 'N/A'}
										</span>
									</span>
									<CopyToClipboard text={user?.customer_id} />
								</ListGroup.Item>
								<ListGroup.Item>
									<span className=' flex items-center gap-4 '>
										<span>Phone:</span>
										<span className=' font-bold'>{user?.phone}</span>
									</span>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className=' flex items-center gap-4 '>
										<span>Email:</span>
										<span className=' font-bold'>{user?.email}</span>
									</span>
									<CopyToClipboard text={user?.customer_id} />
								</ListGroup.Item>

								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Date Time:</span>
										<span className='font-bold '>
											{new Date(user?.createdAt).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
												hour: 'numeric',
												minute: 'numeric',
											})}
										</span>
									</span>
								</ListGroup.Item>

								<ListGroup.Item>
									<span className=' flex items-center gap-4 '>
										<span>Sponsor name:</span>
										<span className=' font-bold'>{user?.sponsor?.name}</span>
										<Link href={`/users/${user?.sponsor?.user_id}`} passHref>
											<FaExternalLinkAlt />
										</Link>
									</span>
								</ListGroup.Item>

								<ListGroup.Item>
									<span className=' flex items-center gap-4 '>
										<span>Owner name:</span>
										<span className=' font-bold'>{user?.owner_name}</span>
									</span>
								</ListGroup.Item>
							</ListGroup>
						</div>
						{/* End User info */}

						{/* Start Balance info */}
						<div>
							<h3 className=' font-bold ml-2 my-1'>Balance Info</h3>
							<ListGroup>
								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Main balance:</span>
										<span className='font-bold'>
											{Number(user?.m_balance).toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</span>
									</span>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Game balance:</span>
										<span className='font-bold '>
											{Number(user?.g_balance).toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</span>
									</span>
								</ListGroup.Item>
							</ListGroup>
						</div>
						{/* End Balance info */}

						{/* Start Wallet info */}
						<div>
							<h3 className=' font-bold ml-2 my-1'>Wallet Info</h3>
							<ListGroup>
								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Total Deposit:</span>
										<span className='font-bold'>
											{Number(wallet?.total_deposit).toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</span>
									</span>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Total Withdraw:</span>
										<span className='font-bold '>
											{Number(wallet?.total_withdraw).toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</span>
									</span>
								</ListGroup.Item>

								<ListGroup.Item>
									<span className=' flex items-center gap-4'>
										<span>Total Earning:</span>
										<span className='font-bold '>
											{Number(wallet?.total_earing).toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
											})}
										</span>
									</span>
								</ListGroup.Item>
							</ListGroup>
						</div>
						{/* End Wallet info */}
					</div>
				)}
			</div>
		</div>
	);
};

export default UserDetails;
