'use client';
import React, { use, useEffect } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { CiSearch } from 'react-icons/ci';
import {
	useDepositFromAdminMutation,
	useGetUserByIdQuery,
} from '@/redux/features/admin/adminApi';

const FundTransfer = () => {
	const [
		depositFromAdmin,
		{
			isSuccess: d_isSuccess,
			isError: d_isError,
			error: d_error,
			isLoading: d_isLoading,
		},
	] = useDepositFromAdminMutation();

	const [customer_id, setCustomerId] = React.useState('');
	const [fetchData, setFetchData] = React.useState(false);
	const [amount, setAmount] = React.useState(0);
	const [is_user, setIsUser] = React.useState(false);

	const { data, error, isLoading, isError, isSuccess } = useGetUserByIdQuery(
		customer_id,
		{
			skip: !fetchData, // Skip the query unless fetchData is true
		}
	);

	const { user } = data || {};

	const handleInputChange = (e: any) => {
		setCustomerId(e.target.value);
		setIsUser(false);
	};

	const handleSearchClick = (e: any) => {
		e.preventDefault(); // Prevent form submission
		if (customer_id) {
			setFetchData(true); // Set the flag to true to trigger the fetch
		}
	};

	useEffect(() => {
		if (isError && error) {
			toast.error((error as fetchBaseQueryError).data?.message);
			setIsUser(false);
		}
		if (isSuccess && user) {
			setIsUser(true);
		}
	}, [isError, error, isSuccess, user]);

	const handleChangeAmount = (e: any) => {
		setAmount(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log('Submit');
		const data = {
			customer_id,
			amount,
		};
		depositFromAdmin(data);
	};

	// useEffect to show toast on success
	useEffect(() => {
		if (d_isSuccess) {
			toast.success('Fund transfer success');
			// reset the form
			setCustomerId('');
			setIsUser(false);
			setAmount(0);
		}

		if (d_isError && d_error) {
			toast.error((d_error as fetchBaseQueryError).data?.message);
		}
	}, [d_isSuccess, d_isError, d_error]);

	return (
		<div>
			<Card>
				<form
					className='flex max-w-md flex-col gap-4 mx-auto w-full'
					onSubmit={handleSubmit}
				>
					<div className='relative'>
						<div className='mb-2 block'>
							<Label htmlFor='customer_id' value='Enter Customer Id' />
						</div>
						<TextInput
							id='customer_id'
							type='text'
							placeholder='Enter customer ID'
							value={customer_id}
							onChange={handleInputChange}
							required
						/>
						<CiSearch
							className='text-xl absolute top-[56%] right-4 cursor-pointer'
							onClick={handleSearchClick} // Trigger search on icon click
						/>
					</div>
					{/* Start Show User INfo */}
					{is_user && (
						<Card>
							<p>Customer Name: {user?.name}</p>
							<p>Customer Email: {user?.email}</p>
							<p>Customer Id: {user?.customer_id}</p>
						</Card>
					)}
					{/* End Show User INfo */}
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='amount' value='Amount' />
						</div>
						<TextInput
							id='amount'
							type='number'
							required
							value={amount}
							onChange={handleChangeAmount}
						/>
					</div>

					<Button type='submit'>Submit</Button>
				</form>
			</Card>
		</div>
	);
};

export default FundTransfer;
