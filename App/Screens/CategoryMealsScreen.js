import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import { CATEGORY, MEALS } from "../Models/Data/Dummy-data";
import MealItem from "../Components/MealItem";

const CategoryMealsScreen = (props) => {
  const cateId = props.navigation.getParam("categoryId");
  const mealList = MEALS.filter(
    (mealObj) => mealObj.categoryIds.indexOf(cateId) >= 0
  );

  const flatListDataHandler = (itemData) => {
    return (
      <MealItem
        mealsData={itemData}
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealsDetails",
            params: {
              mealDetailsId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.Screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={flatListDataHandler}
        data={mealList}
        style={{ width: "90%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryId");
  const selectedTitle = CATEGORY.find((cat) => cat.id === cateId);

  return {
    headerTitle: selectedTitle.title,
  };
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
