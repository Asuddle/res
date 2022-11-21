import { Card, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import CardWrapper from './CardWrapper';
import ContainerComponent from '../container';
import FieldCreator from './fieldCreator';
import homeStyles from '../../styles/Home.module.scss';
import styles from '../../styles/Register.module.scss';
import { useState } from 'react';

export const formField1 = [
	{ type: 'select', label: 'Title', name: 'title' },
	{ type: 'text', label: 'First Name', name: 'firstName' },
	{ type: 'text', label: 'Middle Name', align: 'right', name: 'middleName' },
	{ type: 'text', label: 'Last Name', name: 'lastName' },
	{ type: 'text', label: 'Country', name: 'country' },
	{ type: 'text', label: 'Emirates City', align: 'right', name: 'emirates' },
	{ type: 'text', label: 'Nationality', name: 'nationality' },
	{ type: 'select', label: 'Profession/Member Type', name: 'memberType' },
	{ type: 'text', label: 'Emirates ID', align: 'right', name: 'emiratesID' },
];

export const formField2 = [
	{ type: 'text', label: 'Mobile Number', name: 'mobile' },
	{ type: 'text', label: 'Email Address', name: 'email' },
	{ type: 'text', label: 'Password', name: 'password' },
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
	{ type: 'select', label: 'Website (if any)', name: 'website' },
	{ type: 'text', label: 'Hobbies', name: 'hobbies' },
	{ type: 'select', label: 'Interest', name: 'interest' },
	{ type: 'text', label: 'Height', name: 'height' },
	{ type: 'text', label: 'Age', name: 'age' },
	{ type: 'text', label: 'Weight', name: 'weight' },
	{ type: 'textarea', label: 'What makes you feel happy?', name: 'feelHappy' },
];

export const formField5 = [
	// { type: 'text', label: 'Emirates ID' },
	{ type: 'text', label: 'Profile Photo', name: 'profilePhoto' },
	// { type: 'text', label: 'Weight', name: 'weight' },
	{
		type: 'textarea',
		label: 'What are your expextations about ZeS Club?',
		name: 'expectations',
	},
];

export default function RegisterForm() {
	const [zesClub, setZesClub] = useState(1);
	const handleTab = (val) => {
		setZesClub(val);
	};

	return (
		<ContainerComponent>
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
						<FieldCreator key={item.label} item={item} />
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
							<FieldCreator key={item.label} item={item} />
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
						<FieldCreator key={item.label} item={item} />
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
						<FieldCreator key={item.label} item={item} />
					))}
				</Row>
			</Card>
			<br />
			<br />
			<Card className={styles.card}>
				<Row>
					{formField4.map((item) => (
						<FieldCreator key={item.label} item={item} />
					))}
				</Row>
			</Card>
			<br />
			<br />
			<Card className={styles.card}>
				<Row>
					{formField5.map((item) => (
						<FieldCreator key={item.label} item={item} />
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
					<Input type='checkbox' /> I hereby confirmed that all information, we
					provided are genuine and verfied
				</Label>
			</FormGroup>
			<br />
			<br />
			<button
				className={homeStyles.aboutZesButton}
				style={{ textTransform: 'uppercase' }}
			>
				Submit
			</button>

			<br />
		</ContainerComponent>
	);
}
