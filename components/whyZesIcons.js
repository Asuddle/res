import Image from 'next/image';
import { useState } from 'react';

export default function WhyZesIcons({ item, index }) {
	const [onHover, setOnHover] = useState(false);
	console.log(index + 1);
	return (
		<div
			key={item.name}
			className='category-item col-sm-12 col-lg-4'
			onMouseOver={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
		>
			<div className='category-icon'>
				<Image
					src={`/home/icon${index + 1}.png`}
					alt={item.name}
					width={53}
					height={53}
				/>
			</div>
			<br />
			<a href='#' className='category-title'>
				{item.name}
			</a>
			<p className='category-caption'>lorem picsum ek dsa doijdasdijsad</p>
		</div>
	);
}
// filter: brightness(0) invert(1);
