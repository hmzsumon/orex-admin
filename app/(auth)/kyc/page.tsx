'use client';
import { useGetUserKycQuery } from '@/redux/features/kyc/kycApi';
import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { formatDate } from '@/lib/functions';
import Link from 'next/link';
import { Box } from '@mui/material';
import { FaEye } from 'react-icons/fa';

const KycVerification = () => {
	const { data, isLoading, isSuccess, isError, error } = useGetUserKycQuery();
	const { verifications } = data || [];

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
			field: 'status',
			headerName: 'Status',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.status}</p>
				</div>
			),
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
						<Link href={`/kyc/${params.row.id}`} passHref>
							<FaEye />
						</Link>
					</div>
				);
			},
		},
	];

	const rows: any = [];

	verifications &&
		verifications.map((kyc: any) => {
			return rows.unshift({
				id: kyc._id,
				name: kyc.name,
				customer_id: kyc.partner_id,
				date: formatDate(kyc.createdAt),
				status: kyc.status,
			});
		});

	return (
		<div>
			<h1>Kyc Verification</h1>
			<Box sx={{ height: 400, width: '100%' }}>
				<DataGrid rows={rows} columns={columns} loading={isLoading} />
			</Box>
		</div>
	);
};

export default KycVerification;
