import { useEffect, useState } from 'react';

interface CountdownProps {
	miningTime?: number;
}

const Countdown: React.FC<CountdownProps> = ({ miningTime }) => {
	const [time, setTime] = useState((miningTime || 0) * 60);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatTime = (seconds: number): string => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	};

	return (
		<div>
			{time > 0 ? (
				<p className='text-cyan-100 '>{formatTime(time)}</p>
			) : (
				<p className='text-cyan-100 '>00:00:00</p>
			)}
		</div>
	);
};

export default Countdown;
