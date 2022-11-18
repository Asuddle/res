// // api/users.js

// import { createUser, getUser } from '../controller/user';

// import User from '../../models/User';
// import bcrypt from 'bcryptjs';
// import dbConnect from '../../util/mongodb';
// import { hashPassword } from '../../util/hashPassword';

// export default async function handler(req, res) {
// 	const { method } = req;

// 	await dbConnect();

// 	switch (method) {
// 		case 'GET':
// 			try {
// 				const users = await User.find({});
// 				res.status(200).json({ success: true, data: users });
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;
// 		case 'POST':
// 			try {
// 				let { email, password, firstName } = req.body;
// 				const existingUser = await User.findOne({ email });
// 				if (existingUser) {
// 					return res.send({ success: false, message: 'Email already exists!' });
// 				}
// 				const hash = await bcrypt.hash(password, 10);
// 				req.body.password = hash;
// 				const user = await User.create(req.body);
// 				res.status(201).json({ success: true, data: user });
// 			} catch (error) {
// 				res.status(400).json({ success: false, error: error });
// 			}
// 			break;
// 		default:
// 			res.status(400).json({ success: false });
// 			break;
// 	}
// }
