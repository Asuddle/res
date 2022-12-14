import Select from 'react-select';
import styles from '../../styles/Register.module.scss';

const customStyles = {
	control: (provided, state) => ({
		...provided,
		height: 40,
		border: '1px solid #686868',
		boxShadow: 'none',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		background: '#bababa',
		borderRadius: '50px',
		padding: '0px',
		color: 'white',
		marginRight: '6px',
	}),
};
const defaultOptions = [
	{
		value: 'ocean',
		label: 'Ocean',
		color: '#00B8D9',
	},
	{
		value: 'blue',
		label: 'Blue',
		color: '#0052CC',
	},
];

export const SelectField = ({ options = defaultOptions, field }) => {
	return (
		<Select
			styles={customStyles}
			className={styles.select}
			{...field}
			components={{
				IndicatorSeparator: () => null,
			}}
			placeholder={<div className={styles.placeholder}>Select category</div>}
			name='color'
			options={options}
		/>
	);
};
