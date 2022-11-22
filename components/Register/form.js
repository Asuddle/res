import { Card, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import CardWrapper from './CardWrapper';
import ContainerComponent from '../container';
import FieldCreator from './fieldCreator';
import homeStyles from '../../styles/Home.module.scss';
import styles from '../../styles/Register.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const formField1 = [
	{ type: 'select', name: 'title', label: 'Title', name: 'title' },
	{ type: 'text', name: 'firstName', label: 'First Name', name: 'firstName' },
	{
		type: 'text',
		name: 'middleName',
		label: 'Middle Name',
		align: 'right',
		name: 'middleName',
	},
	{ type: 'text', name: 'lastName', label: 'Last Name', name: 'lastName' },
	{ type: 'text', name: 'country', label: 'Country', name: 'country' },
	{
		type: 'text',
		name: 'emiratesCity',
		label: 'Emirates City',
		align: 'right',
		name: 'emirates',
	},
	{
		type: 'text',
		name: 'nationality',
		label: 'Nationality',
		name: 'nationality',
	},
	{
		type: 'select',
		name: 'profession',
		label: 'Profession/Member Type',
		name: 'memberType',
	},
	{
		type: 'text',
		name: 'emiratesID',
		label: 'Emirates ID',
		align: 'right',
		name: 'emiratesID',
	},
];

export const formField2 = [
	{ type: 'text', name: 'mobile', label: 'Mobile Number', name: 'mobile' },
	{ type: 'text', name: 'email', label: 'Email Address', name: 'email' },
	{ type: 'text', name: 'password', label: 'Password', name: 'password' },
];

export const formField3 = [
	{
		type: 'inline-radio',
		label: 'Do you have your own business',
		name: 'haveBusiness',
	},
	{
		type: 'inline-text',
		label: 'Industry Sector (If yes)',
		name: 'industrySector',
	},
];

export const formField4 = [
	{
		type: 'select',
		name: 'website',
		label: 'Website (if any)',
		name: 'website',
	},
	{ type: 'text', name: 'hobbies', label: 'Hobbies', name: 'hobbies' },
	{ type: 'select', name: 'interest', label: 'Interest', name: 'interest' },
	{ type: 'text', name: 'height', label: 'Height', name: 'height' },
	{ type: 'text', name: 'age', label: 'Age', name: 'age' },
	{ type: 'text', name: 'weight', label: 'Weight', name: 'weight' },
	{
		type: 'textarea',
		name: 'makesHappy',
		label: 'What makes you feel happy?',
		name: 'feelHappy',
	},
];

export const formField5 = [
	// { type: 'text', label: 'Emirates ID' },
	{
		type: 'text',
		name: 'profile',
		label: 'Profile Photo',
		name: 'profilePhoto',
	},
	// { type: 'text', label: 'Weight', name: 'weight' },
	{
		type: 'textarea',
		name: 'expectations',
		label: 'What are your expextations about ZeS Club?',
		name: 'expectations',
	},
];

export default function RegisterForm() {
	const [zesClub, setZesClub] = useState(1);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			firstName: '',
			select: {},
		},
	});
	const handleTab = (val) => {
		setZesClub(val);
	};
	const onSubmit = (data) => console.log(data);

	return (
		<ContainerComponent>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardWrapper>
					<Row className='row g-3'>
						<Col
							md={6}
							className={zesClub == 1 ? styles.tabLeftActive : styles.tabLeft}
							onClick={() => handleTab(1)}
						>
							ZeS Beauty Club
						</Col>
						<Col
							md={6}
							className={zesClub == 2 ? styles.tabRightActive : styles.tabRight}
							onClick={() => handleTab(2)}
						>
							ZeS Club
						</Col>
						{formField1.map((item) => (
							<FieldCreator key={item.label} item={item} control={control} />
						))}
						<br />
						<br />
						<br />
					</Row>
				</CardWrapper>
				<br />
				<br />
				{zesClub == 2 && (
					<Card className={styles.card}>
						<Row className='row g-3'>
							<h4>Spouse Details</h4>
							{formField1.map((item) => (
								<FieldCreator control={control} key={item.label} item={item} />
							))}
							<br />
							<br />
							<br />
						</Row>
					</Card>
				)}
				<br />
				<br />
				<Card className={styles.card}>
					<Row className='row g-3'>
						{formField2.map((item) => (
							<FieldCreator control={control} key={item.label} item={item} />
						))}
						<br />
						<br />
						<br />
					</Row>
				</Card>
				<br />
				<br />
				<Card className={styles.card}>
					<Row className='row g-3'>
						{formField3.map((item) => (
							<FieldCreator control={control} key={item.label} item={item} />
						))}
					</Row>
				</Card>
				<br />
				<br />
				<Card className={styles.card}>
					<Row>
						{formField4.map((item) => (
							<FieldCreator control={control} key={item.label} item={item} />
						))}
					</Row>
				</Card>
				<br />
				<br />
				<Card className={styles.card}>
					<Row>
						{formField5.map((item) => (
							<FieldCreator control={control} key={item.label} item={item} />
						))}
					</Row>
				</Card>
				<br />
				<br />
				<FormGroup check>
					<Label check className={styles.inputLabel}>
						<Input type='checkbox' /> I acknowledge that I have read and
						understand the membership benefits as well as the mission and
						objective of ZeS Club
					</Label>
				</FormGroup>
				<br />
				<FormGroup check>
					<Label check className={styles.inputLabel}>
						<Input type='checkbox' /> I hereby confirmed that all information,
						we provided are genuine and verfied
					</Label>
				</FormGroup>
				<br />
				<br />
				<button
					className={homeStyles.aboutZesButton}
					style={{ textTransform: 'uppercase' }}
					type='submit'
				>
					Submit
				</button>

				<br />
			</form>
		</ContainerComponent>
	);
}
