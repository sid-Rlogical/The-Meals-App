import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { CATEGORY } from "../Models/Data/Dummy-data";
import CategoryGrid from "../Components/CategoryGrid";

const CategoriesScreen = (props) => {
  const renderFlatItemData = (itemData) => {
    return (
      <CategoryGrid
        categoryData={itemData}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryTitle: itemData.item.title,
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
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
});

export default CategoriesScreen;
