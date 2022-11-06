// import GoogleMapReact from 'google-map-react';

function GoogleMap() {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		// <GoogleMapReact
		// 	bootstrapURLKeys={{ key: 'AIzaSyCk5lR1dYABB3_g7oB3vqF2lfs_EGDQzYc' }}
		// 	defaultCenter={defaultProps.center}
		// 	defaultZoom={defaultProps.zoom}
		// ></GoogleMapReact>
		<iframe
			src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
			style={{ border: '0', width: '100%', height: '480px' }}
			title='map'
			loading='lazy'
			allowFullScreen
		></iframe>
	);
}

export default GoogleMap;
