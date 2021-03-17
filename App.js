import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from 'react-native-screens'

import MealsNavigator from "./App/Routes/MealsNavigator";

enableScreens();

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

  return <MealsNavigator />;
}
