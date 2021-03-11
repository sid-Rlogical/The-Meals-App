import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealsDetailsScreen from "../Screens/MealsDetailsScreen";

import Colors from "../Utils/Constants/Colors";
import { Platform } from "react-native";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.white : Colors.primary,
    },
  }
);

export default createAppContainer(MealsNavigator);
