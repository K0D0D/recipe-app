import Button from "../Button/Button";
import styles from "./Pagination.module.scss";

const Pagination = ({ onPageChange, currentPage, hasMorePages, disabled }) => {
	const onPrevClick = () => onPageChange(currentPage - 1);

	const onNextClick = () => onPageChange(currentPage + 1);

	const isItFirstPage = currentPage === 0;

	return (
		<div className={styles.container}>
			<Button
				variant="outlined"
				className={styles.button}
				onClick={onPrevClick}
				disabled={disabled || isItFirstPage}
			>
				Prev
			</Button>
			<Button
				variant="outlined"
				className={styles.button}
				onClick={onNextClick}
				disabled={disabled || !hasMorePages}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
