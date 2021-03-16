import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealsDetailsScreen from "../Screens/MealsDetailsScreen";
import FavoriteScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";

import Colors from "../Utils/Constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? Colors.white : Colors.primary,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FavStackNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const mainNavigatorConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favorite: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favorite",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
    },
  },
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(mainNavigatorConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(mainNavigatorConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

const FilterStackNavigator = createStackNavigator({
  Filter: FilterScreen,
});

const MainDrawerNavigator = createDrawerNavigator({
  Favorite: MealsTabNavigator,
  Filter: FilterStackNavigator,
});

export default createAppContainer(MainDrawerNavigator);
