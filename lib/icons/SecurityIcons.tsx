// export biometric icon

interface Props {
	h: number;
	w: number;
}

export const BiometricIcon = ({ h, w }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M3 3h18v18H3V3zm12.128 5.992H8.87a3.383 3.383 0 01-.034-.483c0-1.8 1.416-3.259 3.163-3.259 1.746 0 3.162 1.459 3.162 3.259 0 .164-.011.325-.034.483zM12 11.767c.781 0 1.496-.291 2.048-.775H9.952a3.096 3.096 0 002.048.775z'
				fill='#76808F'
			></path>
			<path
				d='M24 8.992v2H0v-2h24z'
				fill='url(#biometric-authenticator-g_svg__paint0_linear_11266_92151)'
			></path>
			<path
				d='M9.74 12.931H8.236c-1.664 0-3.012 1.39-3.012 3.104v2.715h13.554v-2.715c0-1.715-1.348-3.104-3.012-3.104H14.26L12 15.259 9.74 12.93z'
				fill='url(#biometric-authenticator-g_svg__paint1_linear_11266_92151)'
			></path>
			<defs>
				<linearGradient
					id='biometric-authenticator-g_svg__paint0_linear_11266_92151'
					x1='12'
					y1='8.992'
					x2='12'
					y2='18.75'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
				<linearGradient
					id='biometric-authenticator-g_svg__paint1_linear_11266_92151'
					x1='12'
					y1='8.992'
					x2='12'
					y2='18.75'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

export const AuthenticatorIcon = ({ h = 8, w = 8 }: Props) => {
	console.log(h, w);
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				d='M12 18a8 8 0 100-16v8l-5.657 5.657A7.975 7.975 0 0012 18z'
				fill='url(#authenticator-google-g_svg__paint0_linear)'
			></path>
			<path
				d='M12 10l-5.657 5.657A8 8 0 0112 2v8zM13 20h7v2h-7zM4 20h7v2H4z'
				fill='#76808F'
			></path>
			<defs>
				<linearGradient
					id='authenticator-google-g_svg__paint0_linear'
					x1='13.172'
					y1='18'
					x2='13.172'
					y2='2'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.333' stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#FBDA3C'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

//  email icon
export const EmailIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path fill='#76808F' d='M2 20h20V5H2z'></path>
			<path
				d='M12 17L22 7V4H2v3l10 10z'
				fill='url(#mail-g_svg__paint0_linear)'
			></path>
			<defs>
				<linearGradient
					id='mail-g_svg__paint0_linear'
					x1='12'
					y1='17'
					x2='12'
					y2='4'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// phone icon
export const PhoneIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				d='M17 2H5v20h12V2z'
				fill='url(#authenticator-sms-g_svg__paint0_linear)'
			></path>
			<path
				d='M5 2h12v2H5V2zM5 20h12v2H5v-2zM20 14.001v-7H7v7h3v4l4-4h6z'
				fill='#76808F'
			></path>
			<defs>
				<linearGradient
					id='authenticator-sms-g_svg__paint0_linear'
					x1='5'
					y1='12'
					x2='17'
					y2='12'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// password icon
export const PasswordIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M23 6H1v12h22V6zm-2 2h-2v8h2V8z'
				fill='#76808F'
			></path>
			<path
				d='M6.5 12a2 2 0 10-4 0 2 2 0 004 0z'
				fill='url(#password-g_svg__paint0_linear)'
			></path>
			<circle
				r='2'
				transform='matrix(1 0 0 -1 10 12)'
				fill='url(#password-g_svg__paint1_linear)'
			></circle>
			<path
				d='M17.5 12a2 2 0 10-4 0 2 2 0 004 0z'
				fill='url(#password-g_svg__paint2_linear)'
			></path>
			<defs>
				<linearGradient
					id='password-g_svg__paint0_linear'
					x1='4.5'
					y1='14'
					x2='4.5'
					y2='10'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
				<linearGradient
					id='password-g_svg__paint1_linear'
					x1='2'
					y1='0'
					x2='2'
					y2='4'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
				<linearGradient
					id='password-g_svg__paint2_linear'
					x1='15.5'
					y1='14'
					x2='15.5'
					y2='10'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

//  user icon
export const UserIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 96 96'
			fill='none'
			height={h}
			width={w}
		>
			<path
				opacity='0.3'
				d='M84.5 46l3.5 3.5 3.5-3.5-3.5-3.5-3.5 3.5zM9 29l3 3 3-3-3-3-3 3zM53.5 10.001l2 2 2-2-2-2-2 2z'
				fill='#AEB4BC'
			></path>
			<path
				d='M11.5 80h56V60.5c0-6.351-5.223-11.5-11.667-11.5h-6.222L39.5 58.967 29.389 49h-6.222C16.723 49 11.5 54.149 11.5 60.5V80z'
				fill='url(#third-party-login_svg__paint0_linear_965_15174)'
			></path>
			<path
				opacity='0.3'
				d='M84.5 80h-15V52h5.217c5.403 0 9.783 4.477 9.783 10v18z'
				fill='url(#third-party-login_svg__paint1_linear_965_15174)'
			></path>
			<path
				d='M29.6 38.9c-5.467-5.468-5.467-14.332 0-19.8 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8-5.468 5.467-14.332 5.467-19.8 0z'
				fill='url(#third-party-login_svg__paint2_linear_965_15174)'
			></path>
			<path
				opacity='0.3'
				d='M60.136 43.364a9 9 0 1112.728-12.728 9 9 0 01-12.728 12.728z'
				fill='#AEB4BC'
			></path>
			<path
				d='M39.5 59l-10-10v31h20V49l-10 10z'
				fill='url(#third-party-login_svg__paint3_linear_965_15174)'
			></path>
			<defs>
				<linearGradient
					id='third-party-login_svg__paint0_linear_965_15174'
					x1='39.5'
					y1='49'
					x2='39.5'
					y2='80'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#929AA5'></stop>
					<stop offset='1' stopColor='#76808F'></stop>
				</linearGradient>
				<linearGradient
					id='third-party-login_svg__paint1_linear_965_15174'
					x1='69.5'
					y1='80'
					x2='69.5'
					y2='52'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#AEB4BC'></stop>
					<stop offset='0.701' stopColor='#AEB4BC'></stop>
				</linearGradient>
				<linearGradient
					id='third-party-login_svg__paint2_linear_965_15174'
					x1='39.5'
					y1='43'
					x2='39.5'
					y2='15'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.333' stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#FBDA3C'></stop>
				</linearGradient>
				<linearGradient
					id='third-party-login_svg__paint3_linear_965_15174'
					x1='39.5'
					y1='80'
					x2='39.5'
					y2='49'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.333' stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#FBDA3C'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// user2 icon
export const User2Icon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M13.5 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z'
				fill='url(#sub-account-g_svg__paint0_linear)'
			></path>
			<path
				d='M16 3h5v2h-5V3zM21 7h-5v2h5V7zM21 11h-5v2h5v-2zM3 18a4 4 0 014-4h4a4 4 0 014 4v3H3v-3z'
				fill='#76808F'
			></path>
			<defs>
				<linearGradient
					id='sub-account-g_svg__paint0_linear'
					x1='9'
					y1='12'
					x2='9'
					y2='3'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// check2 icon
export const Check2Icon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M20 3v19H4V3h16z'
				fill='url(#whitelist-g_svg__paint0_linear)'
			></path>
			<path
				d='M16 3h-3V1h-2v2H8v2h8V3zM6.498 13.492l4 4.01 7-6.992-1.42-1.42-5.58 5.582-2.59-2.59-1.41 1.41z'
				fill='#76808F'
			></path>
			<defs>
				<linearGradient
					id='whitelist-g_svg__paint0_linear'
					x1='12'
					y1='22'
					x2='12'
					y2='3'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// hook icon
export const HookIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				d='M12 23l-9-6V3h18v14.1L12 23z'
				fill='url(#phishing-g_svg__paint0_linear)'
			></path>
			<path
				fillRule='evenodd'
				clip-rule='evenodd'
				d='M11.5 8a3 3 0 114 2.83V14a4.5 4.5 0 11-9 0V9l5 5h-3a2.5 2.5 0 005 0v-3.17a3.001 3.001 0 01-2-2.83zm3-1a1 1 0 100 2 1 1 0 000-2z'
				fill='#76808F'
			></path>
			<defs>
				<linearGradient
					id='phishing-g_svg__paint0_linear'
					x1='12'
					y1='23'
					x2='12'
					y2='3'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// device icon
export const DeviceIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				transform='matrix(1 0 0 -1 5 23)'
				fill='url(#devices-phone-g_svg__paint0_linear)'
				d='M0 0h14v22H0z'
			></path>
			<path fill='#76808F' d='M5 21h14v2H5zM5 1h14v2H5z'></path>
			<defs>
				<linearGradient
					id='devices-phone-g_svg__paint0_linear'
					x1='7'
					y1='0'
					x2='7'
					y2='22'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

// activity icon
export const ActivityIcon = ({ h = 8, w = 8 }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			height={h}
			width={w}
		>
			<path
				d='M10 21V3h11v18H10z'
				fill='url(#log-in-g_svg__paint0_linear)'
			></path>
			<path d='M3 11v2h10v5l6-6-6-6v5H3z' fill='#76808F'></path>
			<defs>
				<linearGradient
					id='log-in-g_svg__paint0_linear'
					x1='15.5'
					y1='21'
					x2='15.5'
					y2='3'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F0B90B'></stop>
					<stop offset='1' stopColor='#F8D33A'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};
