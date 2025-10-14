import React from 'react';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

const NotFound = () => {
	return (
		<div className='h-[100vh] flex items-center justify-center custom__BG'>
			<div className='container mx-auto text-center text-gray-700 font-OutFit'>
				<h1 className='text-4xl 2xl:text-5xl first-letter:text-[#BF3BF1] font-bold '>
					Coming Soon!
				</h1>
				<h3 className='mt-3 mb-5 text-sm font-bold'>
					Get ready to relax! Our new massage feature is coming
					soon. Stay tuned!
				</h3>
				<Link href={`/`}>
					<button className='px-6 py-4 mx-auto font-semibold rounded btn__bg'>
						<IoHome /> Go Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
