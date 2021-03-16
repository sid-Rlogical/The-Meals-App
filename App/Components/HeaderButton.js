import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import Color from "../Utils/Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const customHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      {...props}
      iconSize={25}
      color={Platform.OS === "android" ? "white" : Color.primary}
    />
  );
};

export default customHeaderButton;
