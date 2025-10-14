// components/CopyToClipboard.tsx

import { useEffect, useState } from 'react';
import { RiFileCopyFill } from 'react-icons/ri';

type CopyToClipboardProps = {
	text: string;
	size?: string;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
		} catch (error) {
			console.error('Failed to copy text: ', error);
		}
	};

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (isCopied) {
			timeout = setTimeout(() => setIsCopied(false), 3000);
		}

		return () => clearTimeout(timeout);
	}, [isCopied]);

	return (
		<div>
			<button onClick={copyToClipboard}>
				{isCopied ? (
					'Copied!'
				) : (
					<RiFileCopyFill className='inline-block ml-2 text-xl text-gray-400 cursor-pointer' />
				)}
			</button>
		</div>
	);
};

export default CopyToClipboard;
