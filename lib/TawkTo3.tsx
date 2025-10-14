import React, { useEffect } from 'react';

const TawkTo3 = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://embed.tawk.to/653d41cef2439e1631e96f93/1hdrki4c6';
		script.charset = 'UTF-8';
		script.setAttribute('crossorigin', '*');

		document.body.appendChild(script);
	}, []);

	return <div id='tawkto-chat-widget' />;
};

export default TawkTo3;
