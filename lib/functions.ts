// formDate function
export const formatDate = (dt: Date): string => {
	return new Date(dt).toUTCString().substring(4, 16);
};

// formDate with time
export const formDateWithTime = (dt: Date): string => {
	return new Date(dt).toUTCString().substring(0, 22);
};

// formDate with time to local time
export const formDateWithTimeToLocal = (dt: Date): string => {
	return new Date(dt).toLocaleString();
};

// formDate with day month, time
export const formDateWithDayMonthTime = (dt: Date): string => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	// Convert dt to a Date object if it's not already
	const date = new Date(dt);

	const day = String(date.getDate()).padStart(2, '0');
	const month = months[date.getMonth()];
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');

	return `${day} ${month}, ${hours}:${minutes}`;
};

// email masking
export const maskEmail2 = (email: string): string => {
	const [name, domain] = email.split('@');
	const [first, last] = name.split('.');
	return `${first[0]}${'*'.repeat(first.length - 1)}.${last}@${domain}`;
};

export const maskEmail = (email: string) => {
	const atIndex = email.indexOf('@');
	const maskedPart =
		email.substring(0, 3) + email.substring(2, atIndex).replace(/./g, '*');
	const domainPart = email.substring(atIndex);
	return maskedPart + domainPart;
};

// phone number masking
export const maskPhoneNumber = (phoneNumber: string) => {
	const firstThreeDigits = phoneNumber.substring(0, 6); // Get the first three digits
	const lastTwoDigits = phoneNumber.substring(phoneNumber.length - 2); // Get the last two digits
	const maskedDigits = phoneNumber
		.substring(5, phoneNumber.length - 2)
		.replace(/./g, '*'); // Mask the middle digits
	return firstThreeDigits + maskedDigits + lastTwoDigits;
};

// balance formatter
export const formatBalance = (balance: number = 0): string => {
	return balance.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

export const createUTCDateOfBirth = (
	day: string,
	monthName: string,
	year: string
): string => {
	const monthNames: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const month: number = monthNames.indexOf(monthName);
	if (month === -1) {
		throw new Error('Invalid month name');
	}

	const dob: Date = new Date(Date.UTC(Number(year), month, Number(day)));
	return dob.toUTCString();
};
