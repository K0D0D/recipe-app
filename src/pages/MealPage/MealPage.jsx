import { useParams } from "react-router-dom";
import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";

const MealPage = () => {
	const { id } = useParams();

	return (
		<>
			<BottomWrapper title={"Meal with id " + id} />
		</>
	);
};

export default MealPage;
