'use client';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import CopyToClipboard from '@/lib/CopyToClipboard';
import {
	useApproveWithdrawMutation,
	useGetSingleWithdrawRequestQuery,
	useRejectWithdrawMutation,
} from '@/redux/features/withdraw/withdrawApi';
import { Button, Card, ListGroup, Modal, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Select from 'react-select';
interface RejectionReason {
	value: string;
	label: string;
}

const SingleWithdraw = ({ params }: any) => {
	const router = useRouter();
	const { withdrawId } = params;
	const { data, isLoading, isSuccess, isError, error } =
		useGetSingleWithdrawRequestQuery(withdrawId);
	const { withdraw } = data || {};
	const {
		amount,
		net_amount,
		charge,
		partner_id,
		is_approved,
		is_rejected,
		name,
		phone,
		status,
		transactionId,
		user_id,
		_id,
		method,
	} = withdraw || {};

	const [openModal, setOpenModal] = useState(false);
	const [openModal2, setOpenModal2] = useState(false);
	const [reason, setReason] = useState('Transaction Id not matching');

	const [
		approveWithdraw,
		{
			isLoading: a_isLoading,
			isError: a_isError,
			isSuccess: a_isSuccess,
			error: a_error,
		},
	] = useApproveWithdrawMutation();

	const [
		rejectWithdraw,
		{
			isSuccess: r_isSuccess,
			isError: r_isError,
			error: r_error,
			isLoading: r_isLoading,
		},
	] = useRejectWithdrawMutation();

	// approve handler
	const handleApprove = async () => {
		const data = {
			id: _id,
		};
		approveWithdraw(data);
	};

	useEffect(() => {
		if (a_isSuccess) {
			setOpenModal(false);
			toast.success('Withdraw approved successfully');
			router.push('/withdraw/all-withdraw');
		}

		if (a_isError && a_error) {
			toast.error((a_error as fetchBaseQueryError).data?.message);
		}
	}, [a_isSuccess, a_isError]);

	// reject handler
	const handleReject = async () => {
		const data = {
			id: _id,
			reason,
		};
		rejectWithdraw(data);
	};

	useEffect(() => {
		if (r_isSuccess) {
			setOpenModal2(false);
			toast.success('Deposit rejected successfully');
			router.push('/withdraw/all-withdraw');
		}

		if (r_isError && r_error) {
			toast.error((r_error as fetchBaseQueryError).data?.message);
		}
	}, [r_isSuccess, r_isError]);

	return (
		<div>
			<Card>
				<h3 className='text-center '>
					<span
						className={` capitalize text-xl font-semibold ${
							status === 'pending' && 'text-orange-500'
						} ${status === 'approved' && 'text-green-500'} ${
							status === 'rejected' && 'text-red-500'
						} `}
					>
						{withdraw?.status}
					</span>{' '}
					Withdraw Details
				</h3>
				<ListGroup>
					<ListGroup.Item>
						<span className=' flex gap-4'>
							<span>User name:</span>
							<span className=' font-bold'>{name}</span>
						</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span className=' flex gap-4 items-center'>
							<span>User Id:</span>
							<span className='flex items-center gap-1 font-bold'>
								{partner_id}
								<Link
									href={`/users/${partner_id}`}
									passHref
									className='text-success ms-2 '
									style={{ cursor: 'pointer', fontSize: '0.8rem' }}
								>
									<FaArrowUpRightFromSquare />
								</Link>
							</span>
						</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span className=' flex items-center gap-4 '>
							<span>Phone:</span>
							<span className=' font-bold'>{phone}</span>
						</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span className=' flex items-center gap-4'>
							<span>Amount:</span>
							<span className='font-bold'>
								{Number(amount).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</span>
						</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span className=' flex items-center gap-4'>
							<span>Charge:</span>
							<span className='font-bold '>
								{Number(charge).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</span>
						</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span className=' flex items-center gap-4'>
							<span>Net Amount:</span>
							<span className='gap-1  text-green-500 font-bold items-center flex '>
								{Number(net_amount).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
								<CopyToClipboard text={net_amount} />
							</span>
						</span>
					</ListGroup.Item>
					{method && (
						<>
							<ListGroup.Item>
								<span className=' flex items-center gap-4'>
									<span>Network:</span>
									<span className=' font-bold'>{method?.network}</span>
								</span>
							</ListGroup.Item>
							<ListGroup.Item>
								<span className=' flex items-center gap-4'>
									<span>Address:</span>
									<span className='gap-1 font-bold flex'>
										{method?.address}
										<CopyToClipboard text={method?.address} />
									</span>
								</span>
							</ListGroup.Item>
						</>
					)}

					<ListGroup.Item>
						<span className=' flex items-center gap-4'>
							<span>Date Time:</span>
							<span className='font-bold '>
								{new Date(withdraw?.createdAt).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
								})}
							</span>
						</span>
					</ListGroup.Item>

					{method?.name === 'binance' && (
						<>
							<ListGroup.Item>
								<span className=' px-2'>
									<span>Binance Pay ID</span>
									<span className='gap-1 float-end d-flex'>
										{method?.pay_id}
										<CopyToClipboard text={method?.pay_id} />
									</span>
								</span>
							</ListGroup.Item>
						</>
					)}
					<div className=' p-4'>
						{status === 'pending' && (
							<div className='gap-2 mt-2 grid '>
								<Button onClick={() => setOpenModal(true)}>
									<span>Approve</span>
								</Button>{' '}
								<Button
									className=' bg-orange-500'
									onClick={() => setOpenModal2(true)}
								>
									<span>Reject</span>
								</Button>{' '}
							</div>
						)}
					</div>
				</ListGroup>
			</Card>
			<>
				<Modal show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>
						<span>Approve Withdraw!</span>
					</Modal.Header>
					<Modal.Body>
						<div className='space-y-6'>
							<p className='text-base leading-relaxed text-yellow-400'>
								Are you sure you want to approve this withdraw?
							</p>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => handleApprove()}>Approve</Button>
						<Button color='gray' onClick={() => setOpenModal(false)}>
							Decline
						</Button>
					</Modal.Footer>
				</Modal>
			</>
			{/* for reject */}
			<>
				<Modal show={openModal2} onClose={() => setOpenModal2(false)}>
					<Modal.Header>
						<span>Reject Withdraw!</span>
					</Modal.Header>
					{r_isLoading ? (
						<div className='d-flex align-items-center justify-content-center'>
							<PulseLoader color='#FFD700' loading={true} size={10} />
						</div>
					) : (
						<Modal.Body>
							<p className=' text-warning'>
								Are you sure you want to reject this withdraw?
							</p>
							<div className='my-4'>
								<label htmlFor='rejection-reasons my-2'>
									<span>Enter reasons for rejection</span>
								</label>
								{/* Use react-select for a multi-select dropdown */}
								<TextInput
									id='password'
									type='text'
									required
									value={reason}
									onChange={(e) => setReason(e.target.value)}
								/>
							</div>
						</Modal.Body>
					)}
					<Modal.Footer>
						<Button onClick={() => handleReject()}>Reject Withdraw</Button>
						<Button color='gray' onClick={() => setOpenModal2(false)}>
							Decline
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		</div>
	);
};

export default SingleWithdraw;
