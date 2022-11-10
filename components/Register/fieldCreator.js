import { Col, FormGroup, Input, Label, Row } from 'reactstrap';

import { INTERNALS } from 'next/dist/server/web/spec-extension/request';
import Select from 'react-select';
import { SelectField } from './select';
import styles from '../../styles/Register.module.scss';

export default function FieldCreator({ item, col = 4 }) {
	if (item.type === 'text') {
		return (
			<Col md={col}>
				<FormGroup className={styles.formGroup}>
					<Label>{item.label}</Label>
					<Input placeholder={item.label} className={styles.textField} />
				</FormGroup>
			</Col>
		);
	} else if (item.type == 'select') {
		return (
			<Col md={col}>
				<FormGroup className={styles.formGroup}>
					<Label className={styles.inputLabel} for='exampleSelect'>
						{item.label}
					</Label>
					<SelectField />
				</FormGroup>
			</Col>
		);
	} else if (item.type == 'inline-text') {
		return (
			<Col md={12} key={item}>
				<Row>
					<Col md={4}>
						<Label className={styles.inputLabel} for='email'>
							{item.label}
						</Label>
					</Col>
					<Col md={6}>
						<FormGroup style={{ padding: '0px' }}>
							<Input
								placeholder='Email'
								className={styles.textField}
								id='email'
							/>
						</FormGroup>
					</Col>
				</Row>
			</Col>
		);
	} else if (item.type == 'inline-radio') {
		return (
			<Col md={12}>
				<Row>
					<Col md={4}>
						<Label className={styles.inputLabel} for='email'>
							{item.label}
						</Label>
					</Col>
					<Col md={6}>
						<FormGroup style={{ display: 'flex' }}>
							<FormGroup check>
								<Input name='radio1' type='radio' /> <Label check>Yes</Label>
							</FormGroup>
							<FormGroup check style={{ marginLeft: '20px' }}>
								<Input name='radio1' type='radio' /> <Label check>No</Label>
							</FormGroup>
						</FormGroup>
					</Col>
				</Row>
			</Col>
		);
	} else if (item.type == 'textarea') {
		return (
			<Col md={5}>
				<FormGroup>
					<Label className={styles.inputLabel} for='exampleText'>
						{item.label}
					</Label>
					<Input
						className={styles.textArea}
						id='exampleText'
						name='text'
						rows='5'
						type='textarea'
					/>
				</FormGroup>
			</Col>
		);
	}
}
