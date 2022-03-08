import { useParams } from "react-router-dom";
import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";
import styles from "./MealPage.module.scss";
import { useEffect } from "react";
import { fetchMealDetails } from "../../redux/meal_details/mealDetailsThunks";
import { useDispatch, useSelector } from "react-redux";
import {
	selectMealDetailsData,
	selectMealDetailsError,
	selectMealDetailsIsLoading
} from "../../redux/meal_details/mealDetailsSelectors";
import MealInfo from "../../components/MealInfo/MealInfo";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import MealIngredients from "../../components/MealIngredients/MealIngredients";
import MealDirections from "../../components/MealDirections/MealDirections";

const MealPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const details = useSelector(selectMealDetailsData);
	const isLoading = useSelector(selectMealDetailsIsLoading);
	const error = useSelector(selectMealDetailsError);

	useEffect(() => {
		dispatch(fetchMealDetails(id));
	}, [dispatch, id]);

	return (
		<>
			<BottomWrapper title={details?.title}>
				<div className={styles.inner}>
					{isLoading ? (
						<p className={styles.message}>Loading</p>
					) : details ? (
						<>
							<div className={styles.left}>
								<MealInfo />
							</div>
							<div className={styles.right}>
								<Tabs>
									<TabList className={styles.tabList}>
										<Tab
											className={styles.tab}
											selectedClassName={styles.tabSelected}
										>
											Ingredients
										</Tab>
										<Tab
											className={styles.tab}
											selectedClassName={styles.tabSelected}
										>
											Directions
										</Tab>
									</TabList>
									<TabPanel>
										<MealIngredients />
									</TabPanel>
									<TabPanel>
										<MealDirections />
									</TabPanel>
								</Tabs>
							</div>
						</>
					) : (
						<p className={styles.message}>{error}</p>
					)}
				</div>
			</BottomWrapper>
		</>
	);
};

export default MealPage;
