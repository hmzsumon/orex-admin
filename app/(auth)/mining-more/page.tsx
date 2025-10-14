import React from 'react';
import Link from 'next/link';
const MiningMore = () => {
	return (
		<>
			<div className='px-2 py-4 space-y-4'>
				<h2 className='my-1 font-bold text-center md:text-xl text-cyan-100'>
					Revolutionizing Cryptocurrency Mining
				</h2>
				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					At ELC (Community Token), we are committed to revolutionizing the
					world of cryptocurrency mining. Our mission is to provide a dynamic
					and efficient mining experience by introducing a rate that is
					intelligently calculated based on the remaining resources of the
					system and the number of users mining ELC (Community Token).
				</p>
				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					We understand the importance of optimizing mining operations while
					ensuring a fair and sustainable environment for all participants. By
					leveraging advanced technologies and cutting-edge algorithms, we have
					developed a system that dynamically adjusts the mining rate in real
					time.
				</p>
				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					Our innovative approach considers the availability of system
					resources, the number of users engaged in mining ELC (Community
					Token), and a base rate of 0.2. This ensures that mining operations
					remain efficient, stable, and environmentally friendly while offering
					a fair return to miners. By dynamically calculating the mining rate,
					we strike a balance between maximizing returns for miners and
					maintaining the long-term viability of the system.
				</p>

				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					At ELC (Community Token), we prioritize transparency and fairness. We
					believe that every miner should have an equal opportunity to
					contribute to the network and be rewarded accordingly. Our dynamic
					mining rate system promotes inclusivity and prevents any single entity
					from monopolizing the mining process.
				</p>
				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					With ELC (Community Token), you can trust that your mining efforts
					will be rewarded fairly, and your contributions will be instrumental
					in supporting the growth and security of the ELC network. Join us on
					this exciting journey as we reshape the future of cryptocurrency
					mining.
				</p>
				<p className='text-xs font-semibold leading-5 tracking-widest text-cyan-100'>
					Invest in ELC (Community Token) today and be a part of the next
					generation of mining innovation. Together, let's unlock the full
					potential of cryptocurrency mining while maintaining a sustainable and
					equitable ecosystem.
				</p>
				<div className='flex items-center justify-center mt-2'>
					<button className='px-4 py-2 font-semibold text-white rounded-md bg-btn'>
						<Link href='/dashboard' className=' text-cyan-100'>
							Back to Dashboard
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default MiningMore;
