import { RightArrowIcon } from '@/utils/icons/CommonIcons';
import React from 'react';

const SecurityNotice = () => {
	return (
		<div className='my-6'>
			<div className='flex flex-col md:flex-row md:justify-between  gap-2 p-3 mx-2 bg-[#3c2601] rounded-md'>
				<div className='text-sm'>
					To increase your account security, it is recommended that you enable
					2FA, including Express Life/Google authenticator.
				</div>
				<div className='flex '>
					<p className='text-xs text-yellow-700'>
						Enable Express Life/Google Authenticator Now &nbsp;
					</p>
				</div>
			</div>
		</div>
	);
};

export default SecurityNotice;
