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
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? Colors.white : Colors.primary,
};

//---------------------------------------MEAL STACK NAVIGATOR-----------------------------------//
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealsDetails: { 
      screen: MealsDetailsScreen 
    },

  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

//---------------------------------------FAVORITE STACK NAVIGATOR-----------------------------------//
const FavStackNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    MealsDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

//---------------------------------------MEAL AND FAV TAB BAR CONTROLLER----------------------------//
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
        ) : (
          "Meals"
        ),
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Favorite</Text>
        ) : (
          "Favorite"
        ),
    },
  },
};

//---------------------------------------TAB STACK NAVIGATOR-----------------------------------//
const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(mainNavigatorConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(mainNavigatorConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: Colors.accent,
        },
      });

//---------------------------------------FILTER STACK NAVIGATOR-----------------------------------//

const FilterStackNavigator = createStackNavigator(
  {
    Filter: { screen: FilterScreen },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

//---------------------------------------MAIN SIDEBAR (DRAWER) NAVIGATOR-----------------------------------//

const MainDrawerNavigator = createDrawerNavigator(
  {
    Favorite: {
      screen: MealsTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filter: FilterStackNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainDrawerNavigator);
