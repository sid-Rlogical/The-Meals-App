import React from "react";
import {useSelector} from "react-redux";

import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import MealItem from "../Components/MealItem";

const heightNew = Dimensions.get('window').height * 2 / 4 - 10

const MealList = (props) => {

  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  const flatListDataHandler = (itemData) => {

    const isFavMeals = favMeals.some( (meal) => meal.id === itemData.item.id)

    return (
      <MealItem
        mealsData={itemData}
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealsDetails",
            params: {
              mealDetailsId: itemData.item.id,
              headerTitle: itemData.item.title,
              isFav: isFavMeals
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={flatListDataHandler}
        data={props.mealListData}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: heightNew,
    marginVertical: 15
  },
});

export default MealList;
