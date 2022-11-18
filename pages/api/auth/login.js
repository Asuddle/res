import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../util/mongodb';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'POST':
			try {
				let { email, password } = req.body;
				const existingUser = await User.findOne({ email });

				if (
					!(existingUser && bcrypt.compareSync(password, existingUser.password))
				) {
					throw 'Username or password is incorrect';
				}

				if (!existingUser.isVerified) {
					return res.status(200).json({
						id: existingUser.id,
						message: 'Please wait to be verified by the admin',
					});
				}

				const token = jwt.sign({ sub: existingUser.id }, 'newsecret', {
					expiresIn: '7d',
				});

				return res.status(200).json({
					id: existingUser.id,
					firstName: existingUser.firstName,
					lastName: existingUser.lastName,
					token,
				});
			} catch (error) {
				res.status(400).json({ success: false, error: error });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
