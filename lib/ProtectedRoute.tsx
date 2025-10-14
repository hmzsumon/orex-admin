import React, { useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// import { useLoadUserQuery } from '@/features/auth/authApi';

const ProtectedRoute = ({ children }: PropsWithChildren<{}>) => {
	const router = useRouter();
	const { isAuthenticated, user } = useSelector((state: any) => state.auth);
	// useLoadUserQuery(user?._id);
	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/login');
		}
	}, [isAuthenticated]);

	return <div>{children}</div>;
};

export default ProtectedRoute;
