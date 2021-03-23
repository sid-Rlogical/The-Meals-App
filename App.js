import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./App/Routes/MealsNavigator";
import mealReducer from './App/Store/Reducers/meals'

enableScreens();

const rootReducer = combineReducers({
  meals: mealReducer
});

const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./App/assets/Fonts/open-sans.regular.ttf"),
    "open-sans-bold": require("./App/assets/Fonts/open-sans.bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
