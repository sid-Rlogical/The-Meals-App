import React from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import MealItem from "../Components/MealItem";

const heightNew = Dimensions.get('window').height * 2 / 4 - 10
console.log(heightNew);
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
    height: heightNew,
    marginVertical: 15
  },
});

export default MealList;
