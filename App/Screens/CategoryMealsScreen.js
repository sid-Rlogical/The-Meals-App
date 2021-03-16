import React from "react";

import { CATEGORY, MEALS } from "../Models/Data/Dummy-data";
import MealList from "../Components/MealList";

const CategoryMealsScreen = (props) => {
  const cateId = props.navigation.getParam("categoryId");
  const mealList = MEALS.filter(
    (mealObj) => mealObj.categoryIds.indexOf(cateId) >= 0
  );

  return <MealList mealListData={mealList} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryId");
  const selectedTitle = CATEGORY.find((cat) => cat.id === cateId);

  return {
    headerTitle: selectedTitle.title,
  };
};

export default CategoryMealsScreen;
