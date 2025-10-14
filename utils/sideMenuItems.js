import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai';

import { FiUsers, FiGift } from 'react-icons/fi';
import { GiMining } from 'react-icons/gi';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';

const sideMenuItems = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <MdOutlineDashboard />,
		path: '/admin-dashboard',
		role: 'all',
	},
	{
		id: 2,
		name: 'deposits',
		icon: <AiOutlineDownload />,
		path: '/admin/deposits',
		role: 'all',
	},
	{
		id: 3,
		name: 'Withdraw',
		icon: <AiOutlineUpload />,
		path: '/admin/withdraw',
		role: 'all',
	},
	{
		id: 4,
		name: 'Users',
		icon: <FiUsers />,
		path: '/admin/users',
		role: 'all',
	},

	{
		id: 5,
		name: 'lotteries',
		icon: <FiGift />,
		path: '/admin/lotteries',
		role: 'admin',
	},

	{
		id: 13,
		name: 'Verifications',
		icon: <MdOutlineVerifiedUser />,
		path: '/admin/verifications',
		role: 'all',
	},
	{
		id: 6,
		name: 'Shares',
		icon: <FaHandshake />,
		path: '/admin/shares',
		role: 'all',
	},

	//   {
	//     id: 14,
	//     name: 'E-commerce',
	//     icon: (
	//       <svg className='w-6 h-6 shrink-0' viewBox='0 0 24 24'>
	//         <path d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z' />
	//         <path d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z' />
	//         <path d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z' />
	//       </svg>
	//     ),
	//     path: '/',
	//     childItems: [
	//       { id: 1, name: 'Item01' },
	//       { id: 2, name: 'Item02' },
	//       { id: 3, name: 'Item03' },
	//     ],
	//   },
];

export default sideMenuItems;
