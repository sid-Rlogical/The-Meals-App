import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../Components/HeaderButton";
import DefaultText from "../Components/DefaultText";
import { toggleFavorite } from "../Store/Actions/mealsAction";
const heightNew = (Dimensions.get("window").height * 2) / 5;

const ListItem = (props) => {
  return (
    <View style={styles.listData}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const id = props.navigation.getParam("mealDetailsId");
  const mealsDetails = useSelector((state) => state.meals.meals);
  const data = mealsDetails.find((detailsObj) => detailsObj.id === id);
  const currentFavMeal = useSelector((state) => {
    state.meals.favoriteMeals.some((meal) => meal.id === id);
  });

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentFavMeal });
  }, [currentFavMeal]);

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
  const title = navigationData.navigation.getParam("headerTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: heightNew,
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
    color: "black",
  },

  hard: {
    color: "red",
  },

  simple: {
    color: "blue",
  },

  challenging: {
    color: "yellow",
  },
});

export default MealsDetailsScreen;
