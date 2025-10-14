'use client';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PulseLoader } from 'react-spinners';
import {
	useLoginUserMutation,
	useResendVerificationEmailMutation,
} from '@/redux/features/auth/authApi';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import { useAdminLoginMutation } from '@/redux/features/admin/adminApi';

const LoginPage = () => {
	const referId = process.env.NEXT_PUBLIC_DEFAULT_REFER_ID;
	const [adminLogin, { data, isSuccess, isLoading, isError, error }] =
		useAdminLoginMutation();
	const { user } = data || {};
	const [
		resendVerificationEmail,
		{
			isLoading: isResendLoading,
			isSuccess: isResendSuccess,
			isError: isResendError,
			error: resendError,
		},
	] = useResendVerificationEmailMutation();
	const router = useRouter();
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [checkedError, setCheckedError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<boolean>(false);
	const [password, setPassword] = useState<string>('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');

	// handle show password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// handle change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'email') {
			setEmail(value);
			setEmailError(false);
		}
		if (name === 'password') {
			setPassword(value);
			setPasswordError(false);
		}
	};
	// submit form
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (!email) {
			setEmailError(true);
			return;
		}
		if (!password) {
			setPasswordError(true);
			return;
		}

		adminLogin({ email, password });
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Login successful');
			router.push('/dashboard');
		}
		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);

	return (
		<div className=' mx-auto px-3 md:w-6/12'>
			<div className='w-full col-span-2 px-6 mx-auto  '>
				<h1 className='text-2xl font-bold text-center gradient-text '>
					Login to your account
				</h1>
				<div className='my-8'>
					<form onSubmit={handleSubmit}>
						<div className='space-y-4 text-gray-700 '>
							<div className='flex flex-col gap-1'>
								<label
									className={`
									text-sm font-semibold text-gray-400 ${emailError && 'text-red-500'}
								`}
								>
									Email
								</label>
								<input
									className={`px-4 py-2 bg-transparent border rounded ${
										emailError && 'border-red-500 focus:bg-transparent '
									}`}
									type='email'
									value={email}
									name='email'
									onChange={handleChange}
								/>
								{emailError && (
									<small className='text-xs text-red-500'>
										Please enter a valid email address
									</small>
								)}
							</div>

							<div className='relative flex flex-col gap-1'>
								<label
									className={`
									text-sm font-semibold text-gray-400 ${passwordError && 'text-red-500'}
								`}
								>
									Password
								</label>
								<input
									className={`px-4 py-2 bg-transparent border rounded ${
										passwordError && 'border-red-500'
									}`}
									type={showPassword ? 'text' : 'password'}
									name='password'
									value={password}
									onChange={handleChange}
								/>
								<span
									className='absolute right-0 flex items-center px-4 text-gray-600 top-[34px]'
									onClick={handleShowPassword}
								>
									{showPassword ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
											/>
										</svg>
									)}
								</span>
							</div>

							<div className='my-6 space-y-4'>
								<button className='w-full py-3 font-semibold text-gray-100 rounded bg-btn'>
									{isLoading ? (
										<div className='flex items-center justify-center '>
											<PulseLoader color='white' size={10} />
										</div>
									) : (
										'Login'
									)}
								</button>
								<div className='flex items-center justify-between '>
									<Link href='/forgot-password'>
										<span className='block my-1 text-xs text-center underline rounded text-cyan-700 hover:text-gray-200'>
											Forgot password?
										</span>
									</Link>
									<Link href='/register'>
										<span className='block my-1 text-xs text-center text-gray-500 rounded hover:text-gray-200'>
											Don't have an account?
											<span className='mx-1 underline text-cyan-700 '>
												Register
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
