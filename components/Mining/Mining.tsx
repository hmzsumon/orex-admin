'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BsStopwatch } from 'react-icons/bs';

import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import Countdown from './Countdown';
import MiningCountdown from './MiningCountdown';

import Link from 'next/link';
import { GiMining } from 'react-icons/gi';
import {
	useMyMiningQuery,
	useStartMiningMutation,
} from '@/redux/features/mining/miningApi';

//Type 'number' is not assignable to type 'undefined'.ts(2322)
interface WindowSize {
	width: number | undefined;
	height: number | undefined;
}

const Mining = () => {
	const [startMining, { isLoading: m_loading, isError, isSuccess, error }] =
		useStartMiningMutation();
	const videoRef = useRef<any>(null);
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading } = useMyMiningQuery(user?._id);
	const { mining } = data || {};

	useEffect(() => {
		// On component mount, check if there's a saved playback time
		const savedTime = localStorage.getItem('videoTime');

		if (videoRef.current && savedTime) {
			videoRef.current.currentTime = savedTime;
		}

		// On component unmount, remove the event listener
		return () => {
			if (videoRef.current) {
				videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
			}
		};
	}, []);

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			localStorage.setItem('videoTime', videoRef.current.currentTime);
		}
	};

	return (
		<>
			{isLoading ? (
				<div className='flex items-center justify-center my-6'>
					<ScaleLoader color='#EAB308' speedMultiplier={1.3} />
				</div>
			) : (
				<>
					<div className='relative '>
						<div className='absolute w-full md:w-7/12 '>
							<div className='mt-1 ml-2'>
								<h2 className='text-sm font-medium text-cyan-100 '>
									Balance:
									<span className='mx-1 '>
										{mining?.mining_balance
											? Number(mining?.mining_balance).toLocaleString('en-US', {
													minimumFractionDigits: 2,
													maximumFractionDigits: 5,
											  })
											: Number(0).toLocaleString('en-US', {
													minimumFractionDigits: 2,
													maximumFractionDigits: 5,
											  })}{' '}
										ELC
									</span>
								</h2>
							</div>
						</div>
						<video
							ref={videoRef}
							width='100%'
							height='100'
							autoPlay
							loop
							muted
							onTimeUpdate={handleTimeUpdate}
						>
							<source src='/video/express_v1.mp4' type='video/mp4' />
							Your browser does not support the video tag.
						</video>

						<div className='absolute bottom-0 w-full py-1 text-center rounded-t-full bg-btn '>
							<div className='flex items-center justify-center space-x-4'>
								{mining?.is_start ? (
									<>
										{' '}
										<BsStopwatch className='text-xl text-cyan-100' />
										<Countdown miningTime={mining?.mining_time} />
									</>
								) : (
									<button
										className='flex items-center px-2 py-1 text-sm font-semibold text-gray-100 rounded bg-btn disabled:cursor-not-allowed '
										onClick={() => startMining(user?._id)}
										disabled={isLoading || mining?.is_start}
									>
										<GiMining className='inline-block mr-1 ' />
										{isLoading
											? 'Loading...'
											: mining?.is_start
											? 'Mining'
											: 'Start Mine'}
									</button>
								)}
							</div>
						</div>
					</div>

					<div className='px-4 mx-auto my-4 md:px-0 md:w-7/12'>
						<div className='flex items-center justify-center py-2 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-900'>
							{mining?.is_start ? (
								<MiningCountdown
									speed={mining?.total_sped_amount}
									daily_balance={mining?.daily_mining_balance}
								/>
							) : (
								<p className='text-2xl font-bold text-center text-cyan-500'>
									Mining: {Number(0).toFixed(5)} ELC
								</p>
							)}
						</div>

						<div className='space-x-4 p-4 border-[#2e72d2] border rounded bg-[rgba(46,114,210,.1)]'>
							<div className='w-full space-x-4 text-center text-cyan-100 '>
								<span>Basic Rate:</span>
								<span>+0.08 ELC/h</span>
							</div>
							<div className='space-y-3 '>
								<h2 className='my-1 font-bold text-center md:text-xl text-cyan-100'>
									Revolutionizing Cryptocurrency Mining
								</h2>
								<p className='text-xs font-semibold leading-5 text-cyan-100'>
									At ELC Coin, we are committed to revolutionizing the world of
									cryptocurrency mining. Our mission is to provide a dynamic and
									efficient mining experience by introducing a rate that is
									intelligently calculated based on the remaining resources of
									the system and the number of users mining ELC...
								</p>
								<div className='flex items-center justify-center mt-2'>
									<button className='px-4 py-2 font-semibold text-white rounded-md bg-btn'>
										<Link href='/mining-more' className=' text-cyan-100'>
											Read More <span>&#8594;</span>
										</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Mining;

// transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
