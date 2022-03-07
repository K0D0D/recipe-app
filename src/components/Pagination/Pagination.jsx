import styles from "./Pagination.module.scss";

const Pagination = ({ onPageChange, currentPage, hasMorePages, disabled }) => {
	const onPrevClick = () => onPageChange(currentPage - 1);

	const onNextClick = () => onPageChange(currentPage + 1);

	const isItFirstPage = currentPage === 0;

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				onClick={onPrevClick}
				disabled={disabled || isItFirstPage}
			>
				Prev
			</button>
			<button
				className={styles.button}
				onClick={onNextClick}
				disabled={disabled || !hasMorePages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
