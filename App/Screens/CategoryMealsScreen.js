import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultText from "../Components/DefaultText";

//FOR REDUX
import { useSelector } from "react-redux";

import { CATEGORY } from "../Models/Data/Dummy-data";
import MealList from "../Components/MealList";

const CategoryMealsScreen = (props) => {
  const cateId = props.navigation.getParam("categoryId");
  const availableData = useSelector((state) => state.meals.filteredMeals);
  const mealList = availableData.filter(
    (mealObj) => mealObj.categoryIds.indexOf(cateId) >= 0
  );

  if (mealList.length === 0) {
    return (
      <View style={styles.ViewRoot}>
        <DefaultText>No meals found</DefaultText>
      </View>
    );
  }

  return <MealList mealListData={mealList} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  ViewRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryId");
  const selectedTitle = CATEGORY.find((cat) => cat.id === cateId);

  return {
    headerTitle: selectedTitle.title,
  };
};

export default CategoryMealsScreen;
