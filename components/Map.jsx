function GoogleMap(props) {
	return (
		<iframe
			src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
			style={{ border: '0', width: '100%', height: '480px' }}
			title='map'
			allowFullScreen
		></iframe>
	);
}

export default GoogleMap;
