import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGrid = (props) => {
  const catData = props.categoryData;
  const color = catData.item.color;

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    touchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        activeOpacity={0.9}
        onPress={props.onPress}
        style={styles.touchableStyle}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: color },
          }}
        >
          <Text style={styles.txtStyle} numberOfLines={2}>
            {catData.item.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },

  txtStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "right",
  },

  touchableStyle: {
    flex: 1,
  },
});

export default CategoryGrid;
