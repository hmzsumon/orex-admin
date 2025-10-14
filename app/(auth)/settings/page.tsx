import DeviceAndActivity from '@/components/Settings/DeviceAndActivities';
import TwoFactorAuth from '@/components/Settings/TwoFactorAuth';
import React from 'react';

const Settings = () => {
	return (
		<div>
			<div className='px-6 py-8'>
				{/* <div>
					<SecurityNotice />
				</div> */}
				<div>
					<TwoFactorAuth />
				</div>
				<div>
					<DeviceAndActivity />
				</div>
			</div>
		</div>
	);
};

export default Settings;
