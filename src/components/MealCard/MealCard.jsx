import { Link } from "react-router-dom";
import styles from "./MealCard.module.scss";

const MealCard = ({ name, image, id }) => (
	<div className={styles.card}>
		<Link to={`/meal/${id}`} title={name} tabIndex={-1}>
			<img className={styles.image} src={image} alt={name} draggable="false" />
		</Link>
		<div className={styles.info}>
			<Link className={styles.name} to={`/meal/${id}`} title={name}>
				{name}
			</Link>
		</div>
	</div>
);

export default MealCard;
