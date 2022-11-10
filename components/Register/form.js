import { Card, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';

import CardWrapper from './CardWrapper';
import ContainerComponent from '../container';
import FieldCreator from './fieldCreator';
import homeStyles from '../../styles/Home.module.scss';
import styles from '../../styles/Register.module.scss';
import { useState } from 'react';

export const formField1 = [
	{ type: 'select', label: 'Title' },
	{ type: 'text', label: 'First Name' },
	{ type: 'text', label: 'Middle Name', align: 'right' },
	{ type: 'text', label: 'Last Name' },
	{ type: 'text', label: 'Country' },
	{ type: 'text', label: 'Emirates City', align: 'right' },
	{ type: 'text', label: 'Nationality' },
	{ type: 'select', label: 'Profession/Member Type' },
	{ type: 'text', label: 'Emirates ID', align: 'right' },
];

export const formField2 = [
	{ type: 'text', label: 'Mobile Number' },
	{ type: 'text', label: 'Email Address' },
	{ type: 'text', label: 'Password' },
];

export const formField3 = [
	{ type: 'inline-radio', label: 'Do you have your own business' },
	{ type: 'inline-text', label: 'Industry Sector (If yes)' },
];

export const formField4 = [
	{ type: 'select', label: 'Website (if any)' },
	{ type: 'text', label: 'Hobbies' },
	{ type: 'select', label: 'Interest' },
	{ type: 'text', label: 'Height' },
	{ type: 'text', label: 'Age' },
	{ type: 'text', label: 'Weight' },
	{ type: 'textarea', label: 'What makes you feel happy?' },
];

export const formField5 = [
	{ type: 'text', label: 'Emirates ID' },
	{ type: 'text', label: 'Profile Photo' },
	{ type: 'text', label: 'Weight' },
	{ type: 'textarea', label: 'What are your expextations about ZeS Club?' },
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
			{zesClub == 1 && (
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
