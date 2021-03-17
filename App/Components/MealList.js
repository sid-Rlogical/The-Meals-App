import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../Components/MealItem";

const MealList = (props) => {
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
  },
});

export default MealList;
