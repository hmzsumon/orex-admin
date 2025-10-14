'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const AuthLayout = ({ children }: any) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className='flex h-screen overflow-hidden'>
			{/* <!-- ===== Sidebar Start ===== --> */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			{/* <!-- ===== Sidebar End ===== --> */}
			<div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
				{/* <!-- ===== Header Start ===== --> */}
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				{/* <!-- ===== Header End ===== --> */}

				{/* <!-- ===== Main Content Start ===== --> */}
				<main>
					<div className='p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10'>
						{children}
					</div>
				</main>

				{/* <!-- ===== Main Content End ===== --> */}
			</div>
		</div>
	);
};

export default AuthLayout;
