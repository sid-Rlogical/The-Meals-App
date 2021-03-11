import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealsDetailsScreen = (props) => {
  return (
    <View style={styles.Screen}>
      <Text>Meals Details Screen</Text>
      <Button
        title="Go to the parent screen"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealsDetailsScreen.navigationOptions = {
  headerTitle: "Meal Details",
};
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealsDetailsScreen;
