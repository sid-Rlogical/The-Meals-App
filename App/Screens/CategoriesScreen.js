import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";

import { CATEGORY } from "../Models/Data/Dummy-data";
import Colors from "../Utils/Constants/Colors";

const CategoriesScreen = (props) => {
  const renderFlatItemData = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryTitle: itemData.item.title,
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORY}
      renderItem={renderFlatItemData}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Category",
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    padding: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
