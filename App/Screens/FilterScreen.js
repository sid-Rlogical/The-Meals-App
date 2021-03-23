import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { useDispatch } from "react-redux";
import HeaderButton from "../Components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Color from "../Utils/Constants/Colors";

import DefaultText from "../Components/DefaultText";
import { setFilter } from "../Store/Actions/mealsAction";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Color.primary }}
        thumbColor={Platform.OS === "android" ? Color.primary : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilter(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.Screen}>
      <Text style={styles.title}>Available filter / Restriction</Text>
      <FilterSwitch
        label="Gluten Free"
        state={isGlutenFree}
        onChange={(val) => setIsGlutenFree(val)}
      />
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={(val) => setIsLactoseFree(val)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(val) => setIsVegetarian(val)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(val) => setIsVegan(val)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Screen",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 15,
    textAlign: "center",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
});

export default FilterScreen;
