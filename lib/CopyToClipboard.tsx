// components/CopyToClipboard.tsx
'use client';
import { useEffect, useState } from 'react';
import { RiFileCopyFill } from 'react-icons/ri';

type CopyToClipboardProps = {
	text: string;
	size?: string;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, size }) => {
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
		<div className=' relative'>
			<button onClick={copyToClipboard}>
				<RiFileCopyFill
					className={` inline-block ml-2 ${
						size ? size : 'text-sm'
					}  cursor-pointer ${
						isCopied ? 'text-green-500' : 'text-blue-gray-400'
					} `}
				/>
			</button>
			{isCopied && (
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-2 rounded-md shadow-md'>
					<span className='text-white text-xs'>Copied!</span>
				</div>
			)}
		</div>
	);
};

export default CopyToClipboard;
