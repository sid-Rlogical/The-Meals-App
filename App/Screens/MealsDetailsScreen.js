import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { MEALS } from "../Models/Data/Dummy-data";

const MealsDetailsScreen = (props) => {
  const id = props.navigation.getParam("mealDetailsId");
  const data = MEALS.find((detailsObj) => detailsObj.id === id);
  return (
    <View style={styles.Screen}>
      <Text>{data.ingredients}</Text>
    </View>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("mealDetailsId");
  const data = MEALS.find((detailsObj) => detailsObj.id === id);
  return {
    headerTitle: data.title,
  };
};
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealsDetailsScreen;
