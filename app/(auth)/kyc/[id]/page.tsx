'use client';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import {
	useApproveKycMutation,
	useGetSingleUserKycQuery,
	useRejectKycMutation,
} from '@/redux/features/kyc/kycApi';
import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'flowbite-react';
import { formatDate } from '@/lib/functions';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
interface RejectionReason {
	value: string;
	label: string;
}

const SingleKyc = ({ params }: any) => {
	const router = useRouter();
	const { id } = params;
	const { data, isLoading, isSuccess, isError, error } =
		useGetSingleUserKycQuery(id);
	const { verification, address: addressData, user } = data || {};
	const {
		_id,
		name,
		is_verified,
		is_rejected,
		status,
		user_id,
		partner_id,
		document_type,
		document_1,
		document_2,
		passport,
		createdAt,
		selfie,
	} = verification || {};
	const { address, country } = addressData || {};

	const [openModal, setOpenModal] = useState(false);
	const [openModal2, setOpenModal2] = useState(false);
	// State for rejection reasons
	const [reasons, setReasons] = useState<RejectionReason[]>([]);

	// approve kyc
	const [
		approveKyc,
		{
			isLoading: a_isLoading,
			isError: a_isError,
			isSuccess: a_isSuccess,
			error: a_error,
		},
	] = useApproveKycMutation();
	// handle approve kyc
	const handleApproveKyc = () => {
		console.log('approve kyc');
		approveKyc(_id);
	};
	useEffect(() => {
		if (a_isSuccess) {
			toast.success('KYC approved successfully');
			setOpenModal(false);
			router.push('/kyc');
		}

		if (a_isError) {
			if (a_isError && a_error) {
				toast.error((a_error as fetchBaseQueryError).data?.message);
			}
		}
	}, [a_isSuccess, a_isError, a_error]);

	// for reject
	const [
		rejectKyc,
		{
			isLoading: r_isLoading,
			isSuccess: r_isSuccess,
			isError: r_isError,
			error: r_error,
		},
	] = useRejectKycMutation();

	// Explicitly define the type for options
	const rejectionReasonsOptions: RejectionReason[] = [
		{ value: 'document_issue', label: 'Document Not Clear' },
		{ value: 'information_mismatch', label: 'Information Mismatch' },
		// Add more rejection reasons as needed
	];

	// re reject handler
	const handleReReject = async () => {
		console.log('re reject with reasons', reasons);
		const reasonValues = reasons.map((reason) => reason.label);
		const data = {
			id: _id,
			reasons: reasonValues,
		};

		rejectKyc(data);
		console.log(data);
	};

	useEffect(() => {
		if (r_isSuccess) {
			toast.success('KYC rejected successfully');
			setOpenModal2(false);
			router.push('/kyc');
		}

		if (r_isError) {
			if (r_isError && r_error) {
				toast.error((r_error as fetchBaseQueryError).data?.message);
			}
		}
	}, [r_isSuccess, r_isError, r_error]);

	return (
		<div>
			<Card className='p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-semibold'>
						{name} KYC Verification Details
					</h1>
				</div>
				<div className='mt-4'>
					<div className='flex flex-col  gap-4'>
						<div>
							<p className='text-xs'>Name</p>
							<p className='text-sm font-semibold'>{name}</p>
						</div>

						<div>
							<p className='text-xs'>Date of Birth</p>
							<p className='text-sm font-semibold'>
								{formatDate(user?.dateOfBirth)}
							</p>
						</div>
					</div>
					<div className='mt-4 space-y-2'>
						<div>
							<p className='text-xs'>Address</p>
							<p className='text-sm font-semibold'>{address}</p>
						</div>
						<div>
							<p className='text-xs'>Country</p>
							<p className='text-sm font-semibold'>{country}</p>
						</div>
					</div>
					<div className='mt-4'>
						<div>
							<p className='text-xs'>ID Type</p>
							<p className='text-sm font-semibold'>{document_type}</p>
						</div>
					</div>
					<div className='mt-4'>
						<div>
							<p className='text-xs'>Status</p>
							<p className='text-sm font-semibold'>{verification?.status}</p>
						</div>
					</div>
				</div>
			</Card>
			<div className='my-4 flex flex-wrap gap-4'>
				{document_1 && (
					<Card
						className='max-w-sm'
						imgAlt='Meaningful alt text for an image that is not purely decorative'
						imgSrc={document_1}
					>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							{document_type} Front
						</h5>
					</Card>
				)}

				{document_2 && (
					<Card
						className='max-w-sm'
						imgAlt='Meaningful alt text for an image that is not purely decorative'
						imgSrc={document_2}
					>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							{document_type} Back
						</h5>
					</Card>
				)}

				{passport && (
					<Card
						className='max-w-sm'
						imgAlt='Meaningful alt text for an image that is not purely decorative'
						imgSrc={passport}
					>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							Passport
						</h5>
					</Card>
				)}

				{selfie && (
					<Card
						className='max-w-sm'
						imgAlt='Meaningful alt text for an image that is not purely decorative'
						imgSrc={selfie}
					>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							Selfie
						</h5>
					</Card>
				)}
			</div>

			<div>
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
			<>
				<Modal show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>
						<span>Approve Kyc Verification</span>
					</Modal.Header>
					<Modal.Body>
						<div className='space-y-6'>
							<p className='text-base leading-relaxed text-yellow-400'>
								Are you sure you want to approve this deposit?
							</p>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => handleApproveKyc()}>Approve</Button>
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
						<span>Reject KYC Verification</span>
					</Modal.Header>
					{r_isLoading ? (
						<div className='d-flex align-items-center justify-content-center'>
							<PulseLoader color='#FFD700' loading={true} size={10} />
						</div>
					) : (
						<Modal.Body>
							<p className=' text-warning'>
								Are you sure you want to reject this KYC?
							</p>
							<div>
								<label htmlFor='rejection-reasons'>
									<span>Select reasons for rejection</span>
								</label>
								{/* Use react-select for a multi-select dropdown */}
								<Select
									id='rejection-reasons'
									isMulti
									options={rejectionReasonsOptions}
									value={reasons}
									onChange={(selectedOptions) =>
										setReasons(selectedOptions as RejectionReason[])
									}
								/>
							</div>
						</Modal.Body>
					)}
					<Modal.Footer>
						<Modal.Footer>
							<Button onClick={() => handleReReject()}>Reject KYC</Button>
							<Button color='gray' onClick={() => setOpenModal2(false)}>
								Decline
							</Button>
						</Modal.Footer>
					</Modal.Footer>
				</Modal>
			</>
		</div>
	);
};

export default SingleKyc;
