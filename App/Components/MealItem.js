import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from '../Components/DefaultText'

const MealItem = (props) => {
  const mealsData = props.mealsData;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.MealHeader }}>
            <ImageBackground
              source={{ uri: mealsData.item.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {mealsData.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.MealDetails }}>
            <DefaultText>{mealsData.item.duration}min</DefaultText>
            <DefaultText>{mealsData.item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{mealsData.item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ccc",
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  mealRow: {
    flexDirection: "row",
  },

  MealHeader: {
    height: "85%",
  },

  MealDetails: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: "15%",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
});

export default MealItem;
