'use client';
import { formatDate } from '@/lib/functions';
import { useGetUsersQuery } from '@/redux/features/auth/authApi';
import { useGetOwnerUsersQuery } from '@/redux/features/owner/ownerApi';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';

const MyUsers = () => {
	const { data, isLoading, isError, isSuccess, error } =
		useGetOwnerUsersQuery(undefined);
	const { users } = data || [];
	const columns = [
		{
			field: 'date',
			headerName: 'Created At',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.date}</p>
				</div>
			),
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.name}</p>
				</div>
			),
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.email}</p>
				</div>
			),
		},

		{
			field: 'customer_id',
			headerName: 'Customer ID',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.customer_id}</p>
				</div>
			),
		},

		{
			field: 'rank',
			headerName: 'Rank',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.rank}</p>
				</div>
			),
		},

		{
			field: 'is_active',
			headerName: 'Status',
			width: 100,
			renderCell: (params: any) => {
				return (
					<div className='flex items-center'>
						{params.row.is_active ? (
							<p className='text-success '>
								<span>Active</span>
							</p>
						) : (
							<p className='text-danger '>
								<span>Inactive</span>
							</p>
						)}
					</div>
				);
			},
		},
		{
			field: 'block',
			headerName: 'Block',
			width: 150,
			renderCell: (params: any) => {
				return (
					<div className='flex items-center'>
						{params.row.block === true && (
							<p className='text-danger '>
								<span>Blocked</span>
							</p>
						)}

						{params.row.block === false && (
							<p className='text-success '>
								<span>Not Blocked</span>
							</p>
						)}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 60,
			renderCell: (params: any) => {
				return (
					<div
						className='d-flex align-items-center justify-content-center w-100'
						style={{ cursor: 'pointer' }}
					>
						<Link href={`/users/${params.row.customer_id}`} passHref>
							<FaEye />
						</Link>
					</div>
				);
			},
		},
	];

	const rows: any = [];

	users &&
		users.map((user: any) => {
			return rows.unshift({
				id: user._id,
				name: user.name,
				email: user.email,
				customer_id: user.partner_id,
				date: formatDate(user.createdAt),
				is_active: user.is_active,
				block: user.is_block,
				rank: user.rank,
			});
		});
	return (
		<div>
			<div style={{ height: '100%', width: '100%' }}>
				<Card className='my-2 d-flex align-items-center '>
					<div className='gap-2 flex list-none '>
						<li className='text-success h5'> Total Users :</li>
						<li className=' text-success h5'>{users?.length}</li>
					</div>
				</Card>
				<Box sx={{ height: 400, width: '100%' }}>
					<DataGrid rows={rows} columns={columns} loading={isLoading} />
				</Box>
			</div>
		</div>
	);
};

export default MyUsers;
