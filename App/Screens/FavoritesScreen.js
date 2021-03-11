import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const FavoriteScreen = (props) => {
  return (
    <View style={styles.Screen}>
      <Text>Favorite List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteScreen;
