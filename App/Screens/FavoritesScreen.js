import React from "react";
import { MEALS } from "../Models/Data/Dummy-data";
import MealList from "../Components/MealList";
import HeaderButton from "../Components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavoriteScreen = (props) => {
  const favMeal = MEALS.filter(
    (filterMeal) => filterMeal.id === "m1" || filterMeal.id === "m2"
  );

  return <MealList mealListData={favMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorite",
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

export default FavoriteScreen;
