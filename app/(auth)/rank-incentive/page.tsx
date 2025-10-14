'use client';
import Link from 'next/link';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Rank = () => {
	const { user } = useSelector((state: any) => state.auth);

	const ranks = [
		{
			id: 1,
			title: 'Brand Promoter (BP)',
			level1: 20,
			sub: '(20 direct member)',
			bonus: '$10',
			action:
				user?.rank === 'premier' ||
				user?.rank === 'elite' ||
				user?.rank === 'majestic' ||
				user?.rank === 'royal' ||
				user?.rank === 'glorious'
					? 'Claimed'
					: 'Claim',
			claimed: user?.rank === 'elite' ? true : false,
			btnActive:
				user?.rank === 'user' && user?.is_rank_process === true ? true : false,
		},
		{
			id: 2,
			title: 'Sr. Brand Promoter (SBP) ',
			level1: 50,
			sub: '(2 team BP)',
			bonus: '$20',
			action:
				user?.rank === 'elite' ||
				user?.rank === 'majestic' ||
				user?.rank === 'royal' ||
				user?.rank === 'glorious'
					? 'Claimed'
					: 'Claim',
			claimed: user?.rank === 'elite' ? true : false,
			btnActive:
				user?.rank === 'premier' && user?.rank_is_processing === true
					? true
					: false,
		},
		{
			id: 3,
			title: 'Domestic Promoter (DP)  ',
			level1: 100,
			sub: '(2 team SBP)',
			bonus: 'Domestic Tour',
			action:
				user?.rank === 'majestic' ||
				user?.rank === 'royal' ||
				user?.rank === 'glorious'
					? 'Claimed'
					: 'Claim',
			claimed: user?.rank === 'majestic' ? true : false,
			btnActive:
				user?.rank === 'elite' && user?.rank_is_processing === true
					? true
					: false,
		},
		{
			id: 4,
			title: 'Sr. Domestic Promoter (SDP) ',
			level1: 200,
			sub: '(2 team DP)',
			bonus: 'Smart Phone',
			action:
				user?.rank === 'royal' || user?.rank === 'glorious'
					? 'Claimed'
					: 'Claim',
			claimed: user?.rank === 'royal' ? true : false,
			btnActive:
				user?.rank === 'majestic' && user?.rank_is_processing === true
					? true
					: false,
		},
		{
			id: 5,
			title: 'Country Promoter (CP)',
			level1: 400,
			sub: '(2 team SDP)',
			total: 150,
			bonus: 'Laptop',
			action: user?.rank === 'glorious' ? 'Claimed' : 'Claim',
			claimed: user?.rank === 'glorious' ? true : false,
			btnActive:
				user?.rank === 'royal' && user?.rank_is_processing === true
					? true
					: false,
		},
		{
			id: 5,
			title: 'Sr. Country Promoter (SCP) ',
			level1: 600,
			sub: '(4 team CP)',
			bonus: ' Global Tour',
			action: user?.rank === 'glorious' ? 'Claimed' : 'Claim',
			claimed: user?.rank === 'glorious' ? true : false,
			btnActive:
				user?.rank === 'royal' && user?.rank_is_processing === true
					? true
					: false,
		},
	];
	return (
		<>
			<div className='px-4 '>
				<div className='px-1 pt-20 md:pb-24 reward-wrapper'>
					<div className='px-3 py-4 mx-auto opacity-95 bg-black_2'>
						<h2 className='text-xl font-bold text-center md:text-2xl text-blue-gray-300'>
							Rank & Incentive
						</h2>
						<div className='my-4'>
							<div>
								<ul className='grid grid-cols-12 p-1 text-xs font-bold text-center uppercase border border-b-0 border-blue-700 text-blue-gray-300'>
									<li className='col-span-5 '>
										<p className='text-left'>Rank</p>
									</li>

									<li className='col-span-3 '>
										<p className='text-center'>Required</p>
									</li>

									<li className='col-span-2 '>
										<p className='text-left'>Incentive</p>
									</li>
									<li className='col-span-2 '>
										<p className='text-right'>Action</p>
									</li>
								</ul>
								<div className='p-1 space-y-3 border border-blue-700'>
									{ranks.map((rank) => (
										<ul
											key={rank.id}
											className='grid grid-cols-12 text-xs font-bold text-center uppercase border-blue-700 text-blue-gray-300 '
										>
											<li className='col-span-5 text-left '>{rank.title}</li>

											<li className='col-span-3 '>
												<p className='flex items-center justify-center '>
													{rank.level1}
													<FaUsers className='inline-block ml-1' />
												</p>
												<p>{rank.sub}</p>
											</li>

											<li className='col-span-2 '>{rank.bonus}</li>

											<li className='col-span-2 text-right '>
												{rank.btnActive ? (
													<Link href='/rank/rank-claim'>
														<button className='px-2 py-1 bg-green-500 rounded-lg text-blue-gray-100'>
															{rank.action}
														</button>
													</Link>
												) : (
													<button
														className={`bg-black_3 px-2 py-1 rounded-lg
														${
															rank.claimed
																? 'bg-opacity-50  text-orange-800 cursor-not-allowed'
																: 'text-blue-gray-100'
														}
														`}
													>
														{rank.action}
													</button>
												)}
											</li>
										</ul>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Rank;
