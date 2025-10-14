import React, { useEffect, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Layout from '../Dashboard/Layout/Layout';
import GoBack from '../../global/GoBack';
import { useLocation } from 'react-router-dom';

const Submit = () => {
	const location = useLocation();
	const { imgInfo1, imgInfo2, imgInfo3 } = location.state;
	console.log(imgInfo1, imgInfo2, imgInfo3);
	const [imagesPreview, setImagesPreview] = useState([]);

	// handle image preview
	const handleImagePreview = (e) => {
		const files = [imgInfo1, imgInfo2, imgInfo3];
		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagesPreview((oldImages) => [...oldImages, reader.result]);
				}
			};
			reader.readAsDataURL(file);
		});
	};

	return (
		<Layout>
			<div className='w-11/12 p-4 mx-auto border rounded-md md:w-6/12 '>
				<h1>Hello Submit</h1>
				<div>
					<button onClick={handleImagePreview}>Preview Images</button>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap4'>
					<img
						src={imgInfo1.imagePreviewUrl_1}
						alt='image1'
						className='w-20 '
					/>
					<img
						src={imgInfo2.imagePreviewUrl_2}
						alt='image2'
						className='w-20 '
					/>
					<img
						src={imgInfo3.imagePreviewUrl_3}
						alt='image3'
						className='w-20 '
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Submit;

// for (let i = 0; i < files.length; i++) {
// 	(function (file) {
// 		var reader = new FileReader();
// 		reader.onload = (file) => {
// 			console.log('render', reader.result);
// 			setImagesPreview([...imagesPreview, reader.result]);
// 		};

// 		reader.readAsDataURL(file);
// 	})(files[i]);
// }
