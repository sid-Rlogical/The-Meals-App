import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import { CATEGORY } from "../Models/Data/Dummy-data";
import Colors from "../Utils/Constants/Colors";

const CategoryMealsScreen = (props) => {
  const cateId = props.navigation.getParam("categoryId");
  const selectedTitle = CATEGORY.find((cat) => cat.id === cateId);

  return (
    <View style={styles.Screen}>
      <Text>Go to the Meal Screen</Text>
      <Button
        title="Go to the Meal Screen"
        onPress={() => {
          props.navigation.navigate("MealsDetails");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
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
