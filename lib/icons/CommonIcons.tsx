interface Props {
	h: number;
	w: number;
	color: string;
}

// close icon
export const CloseIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w} `}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z'
				fill={color}
			></path>
		</svg>
	);
};

// check icon
export const CheckIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w} `}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z'
				fill={color}
			></path>
		</svg>
	);
};

// close red icon
export const CloseRedIcon = ({ h, w }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 96 96'
			fill='none'
			className={`h-${h} w-${w} `}
		>
			<circle
				r='15'
				transform='matrix(1 0 0 -1 73 73)'
				fill='url(#security-low-dark_svg__paint2_linear)'
			></circle>
			<path
				d='M70.88 73.003l-5.304-5.304 2.122-2.12L73 70.88l5.303-5.303 2.121 2.121-5.303 5.304 5.303 5.303-2.12 2.121L73 75.124l-5.303 5.303-2.122-2.12 5.303-5.304z'
				fill='#fff'
			></path>

			<defs>
				<linearGradient
					id='security-low-dark_svg__paint0_linear'
					x1='30.001'
					y1='8'
					x2='30.001'
					y2='92'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#929AA5'></stop>
					<stop offset='1' stopColor='#76808F'></stop>
				</linearGradient>
				<linearGradient
					id='security-low-dark_svg__paint1_linear'
					x1='66.001'
					y1='92'
					x2='66.001'
					y2='8'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#76808F'></stop>
					<stop offset='1' stopColor='#929AA5'></stop>
				</linearGradient>
				<linearGradient
					id='security-low-dark_svg__paint2_linear'
					x1='15'
					y1='30'
					x2='15'
					y2='0'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F84960'></stop>
					<stop offset='1' stopColor='#D9304E'></stop>
				</linearGradient>
				<filter
					id='security-low-dark_svg__filter0_d'
					x='24'
					y='22'
					width='48'
					height='48'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					></feColorMatrix>
					<feOffset></feOffset>
					<feGaussianBlur stdDeviation='5'></feGaussianBlur>
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
					<feBlend
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					></feBlend>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
};

// Not available icon
export const NotAvailableIcon = ({ h, w }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 96 96'
			fill='none'
			className={`h-${h} w-${w} `}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M12.001 68.043l36 23.957V8h-36v60.043z'
				fill='url(#security-low-dark_svg__paint0_linear)'
			></path>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M48.001 8v84l36-24V8h-36z'
				fill='url(#security-low-dark_svg__paint1_linear)'
			></path>
			<path d='M74 64.667L48 82 22 64.667V18h52v46.667z' fill='#76808F'></path>
			<circle
				r='15'
				transform='matrix(1 0 0 -1 73 73)'
				fill='url(#security-low-dark_svg__paint2_linear)'
			></circle>
			<path
				d='M70.88 73.003l-5.304-5.304 2.122-2.12L73 70.88l5.303-5.303 2.121 2.121-5.303 5.304 5.303 5.303-2.12 2.121L73 75.124l-5.303 5.303-2.122-2.12 5.303-5.304z'
				fill='#fff'
			></path>
			<g filter='url(#security-low-dark_svg__filter0_d)'>
				<path d='M34 46l14 14 14-14-14-14-14 14z' fill='#474D57'></path>
			</g>
			<defs>
				<linearGradient
					id='security-low-dark_svg__paint0_linear'
					x1='30.001'
					y1='8'
					x2='30.001'
					y2='92'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#929AA5'></stop>
					<stop offset='1' stopColor='#76808F'></stop>
				</linearGradient>
				<linearGradient
					id='security-low-dark_svg__paint1_linear'
					x1='66.001'
					y1='92'
					x2='66.001'
					y2='8'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#76808F'></stop>
					<stop offset='1' stopColor='#929AA5'></stop>
				</linearGradient>
				<linearGradient
					id='security-low-dark_svg__paint2_linear'
					x1='15'
					y1='30'
					x2='15'
					y2='0'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F84960'></stop>
					<stop offset='1' stopColor='#D9304E'></stop>
				</linearGradient>
				<filter
					id='security-low-dark_svg__filter0_d'
					x='24'
					y='22'
					width='48'
					height='48'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					></feColorMatrix>
					<feOffset></feOffset>
					<feGaussianBlur stdDeviation='5'></feGaussianBlur>
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'></feColorMatrix>
					<feBlend
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					></feBlend>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
};

// right arrow icon
export const RightArrowIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w} font-bold`}
		>
			<path
				d='M7.586 18.586L9 20l8-8-8-8-1.414 1.414L14.172 12l-6.586 6.586z'
				fill={color}
			></path>
		</svg>
	);
};

// home icon
export const HomeIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='#FFD700'
			width='50'
			height='50'
		>
			<path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V9h16V18z' />
			<path d='M20,4H4C2.9,4,2,4.8,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V9h16V18z' />
			<path d='M20,11H4V9h16V11z M20,15H4v-2h16V15z' />
		</svg>
	);
};

// explanation icon
export const ExplanationIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			className={`h-${h} w-${w} `}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z'
				fill={color}
			></path>
		</svg>
	);
};

// Not found icon
export const NotFoundIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 96 96'
			fill='none'
			className={`h-${h} w-${w}`}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z'
				fill='url(#not-found-data_svg__paint0_linear_22059_32288)'
			></path>
			<path
				opacity='0.3'
				d='M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z'
				fill='#929AA5'
			></path>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z'
				fill='url(#not-found-data_svg__paint1_linear_22059_32288)'
			></path>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'
				fill='url(#not-found-data_svg__paint2_linear_22059_32288)'
			></path>
			<defs>
				<linearGradient
					id='not-found-data_svg__paint0_linear_22059_32288'
					x1='55'
					y1='8'
					x2='55'
					y2='88'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='0.1'></stop>
					<stop offset='1' stopColor='0.25'></stop>
				</linearGradient>
				<linearGradient
					id='not-found-data_svg__paint1_linear_22059_32288'
					x1='4.172'
					y1='68.75'
					x2='24.328'
					y2='68.75'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#929AA5'></stop>
					<stop offset='1' stopColor='#76808F'></stop>
				</linearGradient>
				<linearGradient
					id='not-found-data_svg__paint2_linear_22059_32288'
					x1='15'
					y1='48'
					x2='55'
					y2='48'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#929AA5'></stop>
					<stop offset='1' stopColor='#76808F'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// filter icon
export const FilterIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w}`}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19 4H5v3.5l5 5V21l4-2.319V12.5l5-5V4z'
				fill='currentColor'
			></path>
		</svg>
	);
};

// edit icon
export const EditIcon = () => {
	return (
		<svg
			fill='#808080'
			className='bn-svg h-5 w-5 cursor-pointer text-[#808080]'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M17.879 3.293l2.828 2.828-2.12 2.121-2.83-2.828 2.122-2.121zm-3.183 3.182l2.829 2.829-4.667 4.666H10.03v-2.828l4.666-4.667zM7 4h4v3H7v10h10v-4h3v7H4V4h3z'
				fill='gray'
			></path>
		</svg>
	);
};

// email icon
export const EmailIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			className={`h-${h} w-${w}`}
			fill='none'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M21 4H3v16h18V4zm-2 2v2.586L12 13.172 5 8.586V6h14zM5 18v-7.414l7 5.586 7-5.586V18H5z'
				fill='currentColor'
			></path>
		</svg>
	);
};

// close icon2
export const CloseIcon2 = () => {
	return (
		<svg
			fill='iconNormal'
			className='w-6 h-6 cursor-pointer bn-svg bn-mfa-navigator-clickable bn-mfa-navigator-close'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z'
				fill='currentColor'
			></path>
		</svg>
	);
};

// wallet icon
export const WalletIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			height='800px'
			width='800px'
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 384.97 384.97'
		>
			<g>
				<g>
					<g id='XMLID_1_'>
						<g>
							<path
								fill='#F7CF52'
								d='M347.77,90.305c20.19,0,37.18-16.31,37.2-36.41v277.18c0,20.11-16.3,36.41-36.41,36.41H28.23
					c-6.66,0-12.06-5.4-12.06-12.05v-82.54H50c24.3,0,44-19.7,44-44c0-12.15-4.93-23.15-12.89-31.11
					c-7.96-7.97-18.96-12.89-31.11-12.89H16.17v-82.54c0-6.65,5.4-12.05,12.06-12.05H40.6h29.6H346
					C346,90.305,347.77,90.305,347.77,90.305z'
							/>
							<path
								fill='#DDB74B'
								d='M374.31,28.145c6.43,6.42,10.46,15.24,10.65,24.99c0.01,0.26,0.01,0.51,0.01,0.76
					c-0.02,20.1-17.01,36.41-37.2,36.41H346v-34.82H70.2v-25.95c0-6.65,5.4-12.05,12.06-12.05h266.3
					C358.62,17.485,367.72,21.565,374.31,28.145z'
							/>
							<path
								fill='#DDB74B'
								d='M94,228.895c0,24.3-19.7,44-44,44H16.17H15.2c-8.39,0-15.2-6.8-15.2-15.2v-57.6
					c0-8.4,6.81-15.2,15.2-15.2h0.97H50c12.15,0,23.15,4.92,31.11,12.89C89.07,205.745,94,216.745,94,228.895z'
							/>
							<polygon
								fill='#008DB3'
								points='346,55.485 346,90.305 70.2,90.305 40.6,90.305 40.6,55.485 70.2,55.485 				'
							/>
						</g>
					</g>
					<path
						fill='#008DB3'
						d='M56,236.395c-0.49,0-0.98-0.05-1.46-0.15c-0.48-0.09-0.95-0.24-1.41-0.42
			c-0.45-0.19-0.89-0.42-1.29-0.69c-0.41-0.28-0.8-0.59-1.14-0.94c-0.35-0.34-0.66-0.73-0.93-1.14c-0.27-0.4-0.51-0.84-0.69-1.29
			c-0.19-0.45-0.34-0.93-0.43-1.4c-0.1-0.49-0.15-0.98-0.15-1.47s0.05-0.98,0.15-1.46c0.09-0.48,0.24-0.95,0.43-1.41
			c0.18-0.45,0.42-0.89,0.69-1.29c0.27-0.41,0.58-0.8,0.93-1.14c0.34-0.35,0.73-0.66,1.14-0.93c0.4-0.28,0.84-0.51,1.29-0.69
			c0.46-0.19,0.93-0.34,1.41-0.43c0.96-0.2,1.96-0.2,2.93,0c0.48,0.09,0.95,0.24,1.4,0.43c0.45,0.18,0.89,0.41,1.3,0.69
			c0.41,0.27,0.79,0.58,1.14,0.93c0.34,0.34,0.65,0.73,0.93,1.14c0.27,0.4,0.5,0.84,0.69,1.29c0.18,0.46,0.33,0.93,0.42,1.41
			c0.1,0.48,0.15,0.97,0.15,1.46s-0.05,0.98-0.15,1.47c-0.09,0.47-0.24,0.95-0.42,1.4c-0.19,0.45-0.42,0.89-0.69,1.29
			c-0.28,0.41-0.59,0.8-0.93,1.14c-0.35,0.35-0.73,0.66-1.14,0.94c-0.41,0.27-0.85,0.5-1.3,0.69c-0.45,0.18-0.92,0.33-1.4,0.42
			C56.98,236.345,56.49,236.395,56,236.395z'
					/>
				</g>
			</g>
		</svg>
	);
};

// history icon
export const HistoryIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w}`}
		>
			<path
				fillRule='evenodd'
				d='M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z'
				fill={color}
			></path>
		</svg>
	);
};
// dashboard icon
export const DashboardIcon = ({ h, w, color }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			className={`h-${h} w-${w}`}
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M4 4v7h7V4H4zm9 7V4h7v7h-7zm3.5 9.743L12.257 16.5l4.243-4.243 4.243 4.243-4.243 4.243zM4 13h7v7H4v-7z'
				fill='currentColor'
			></path>
		</svg>
	);
};
