import React from 'react';
import sorting from '../../logo/arrow-sm-up-svgrepo-com.svg';
import styles from './SortingControl.module.css';
import { ASC } from '../../components/Shop/Shop';

export const SortingControl = ({ label, onSort, value }) => {
	return (
		<button
			className={styles.container}
			onClick={onSort}
		>
			<div className={styles.selected_wrapper}>
				<p className={styles.selected}>
					<span>{label}</span>
				</p>
				<img
					className={styles.img}
					src={sorting}
					alt={`sorting-direction: ${value}`}
					style={{
						transform: value.toLowerCase() === ASC ? 'rotate(180deg)' : '',
					}}
				/>
			</div>
		</button>
	);
};
