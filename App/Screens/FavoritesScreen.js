import React from "react";
import { View, Text, StyleSheet } from "react-native";

//FOR REDUX
import { useSelector } from "react-redux";

import MealList from "../Components/MealList";
import HeaderButton from "../Components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from '../Components/DefaultText'

const FavoriteScreen = (props) => {
  const favMeal = useSelector((state) => state.meals.favoriteMeals);

  if (favMeal.length === 0 || !favMeal) {
    return (
      <View style={styles.Screen}>
        <DefaultText>No favorite data found, Adding some!</DefaultText>
      </View>
    );
  }

  return <MealList mealListData={favMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorite",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteScreen;
