import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../Models/Data/Dummy-data";
import HeaderButton from "../Components/HeaderButton";
import DefaultText from "../Components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listData}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const id = props.navigation.getParam("mealDetailsId");
  const data = MEALS.find((detailsObj) => detailsObj.id === id);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{data.duration}min</DefaultText>
        <DefaultText>{data.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{data.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {data.ingredients.map((ingredientData) => (
        <ListItem key={ingredientData}>{ingredientData}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {data.steps.map((stepsData) => (
        <ListItem key={stepsData}>{stepsData}</ListItem>
      ))}
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("mealDetailsId");
  const data = MEALS.find((detailsObj) => detailsObj.id === id);
  return {
    headerTitle: data.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },

  listData: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },

  defaultData: {
    color: 'black'
  },

  hard: {
    color: 'red',
  },

  simple: {
    color: 'blue'
  },

  challenging: {
    color: 'yellow'
  }

});

export default MealsDetailsScreen;
