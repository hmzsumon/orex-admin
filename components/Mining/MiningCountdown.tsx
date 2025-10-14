import { useEffect, useState } from 'react';

interface CountdownProps {
	speed?: number;
	daily_balance?: number;
}

const MiningCountdown: React.FC<CountdownProps> = ({
	speed,
	daily_balance,
}) => {
	const [miningRatePerSecond, setMiningRatePerSecond] = useState(
		(speed || 0.2) / 3600
	);

	const [miningBalance, setMiningBalance] = useState(daily_balance || 0);

	useEffect(() => {
		const interval = setInterval(() => {
			setMiningRatePerSecond((prevRate) => prevRate + 0.2 / 3600);
			setMiningBalance((prevBalance) => prevBalance + miningRatePerSecond);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex gap-2 text-2xl font-bold text-center text-cyan-500'>
			<h1>Mining</h1>
			<p>{miningBalance.toFixed(5)} ELC</p>
		</div>
	);
};

export default MiningCountdown;
