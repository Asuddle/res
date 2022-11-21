import React from 'react';

export default function User() {
	return <div>User</div>;
}

// export const createUser = async (req, res) => {
// 	try {
// 		let { email, password, firstName } = req.body;
// 		const existingUser = await User.findOne({ email });
// 		if (existingUser) {
// 			return res.send({ success: false, message: 'Email already exists!' });
// 		}
// 		const hash = await bcrypt.hash(password, 10);
// 		req.body.password = hash;
// 		console.log('hash', password);
// 		const user = await User.create(req.body);
// 		res.status(201).json({ success: true, data: user });
// 	} catch (error) {
// 		res.status(400).json({ success: false, error: error });
// 	}
// };

// export const getUser = async (req, res) => {
// 	try {
// 		const users = await User.find({});
// 		res.status(200).json({ success: true, data: users });
// 	} catch (error) {
// 		res.status(400).json({ success: false });
// 	}
// };
