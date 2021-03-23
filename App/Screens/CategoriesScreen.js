import React from "react";
import {FlatList} from "react-native";

import DefaultText from "../Components/DefaultText";

import { CATEGORY } from "../Models/Data/Dummy-data";
import CategoryGrid from "../Components/CategoryGrid";
import HeaderButton from "../Components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Category",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
