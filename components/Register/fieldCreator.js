import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';

import { SelectField } from './select';
import styles from '../../styles/Register.module.scss';

export default function FieldCreator({ item, col = 4, control }) {
	if (item.type === 'text') {
		return (
			<Col md={col}>
				<Controller
					name={item.name}
					control={control}
					render={({ field }) => (
						<FormGroup className={styles.formGroup}>
							<Label className={styles.inputLabel}>{item.label}</Label>
							<Input
								placeholder={item.label}
								{...field}
								className={styles.textField}
							/>
						</FormGroup>
					)}
				/>
			</Col>
		);
	} else if (item.type == 'select') {
		return (
			<Col md={col}>
				<Controller
					name={item.name}
					control={control}
					render={({ field }) => (
						<FormGroup className={styles.formGroup}>
							<Label className={styles.inputLabel} for='exampleSelect'>
								{item.label}
							</Label>
							<SelectField field={field} />
						</FormGroup>
					)}
				/>
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
						<Controller
							name={item.name}
							control={control}
							render={({ field }) => (
								<FormGroup style={{ padding: '0px' }}>
									<Input
										placeholder='Email'
										{...field}
										className={styles.textField}
										id='email'
									/>
								</FormGroup>
							)}
						/>
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
