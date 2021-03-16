import React from "react";
import { MEALS } from "../Models/Data/Dummy-data";
import MealList from "../Components/MealList";

const FavoriteScreen = (props) => {
  const favMeal = MEALS.filter(
    (filterMeal) => filterMeal.id === "m1" || filterMeal.id === "m2"
  );

  return <MealList mealListData={favMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favorite",
};

export default FavoriteScreen;
