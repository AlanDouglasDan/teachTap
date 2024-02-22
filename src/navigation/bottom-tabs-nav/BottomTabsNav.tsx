import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { images } from "core/images";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { View, Text, Image } from "react-native";
import { Learn, Explore, Activity, Favorites, Account } from "screens";

import styles from "./BottomTabsNav.styles";

export type BottomTabsNavParams = {
  Learn: undefined;
  Explore: undefined;
  Activity: undefined;
  Favorites: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsNavParams>();

const renderTabBarIcon = (name: string, focused: boolean): JSX.Element => {
  let icon;

  switch (name) {
    case "Learn":
      icon = focused ? "learnFocused" : "learnFocused";
      break;
    case "Explore":
      icon = focused ? "explore" : "explore";
      break;
    case "Activity":
      icon = focused ? "activity" : "activity";
      break;
    case "Favorites":
      icon = focused ? "favorites" : "favorites";
      break;
    default:
      icon = focused ? "account" : "account";
      break;
  }

  return (
    <Image source={images[icon]} style={styles.icon} resizeMode="contain" />
  );
};

const renderTabBarLabel = (name: string, focused: boolean): JSX.Element => {
  const style = focused ? "text10Focus" : "text10";
  return <Text style={styles[style]}>{name}</Text>;
};

const BottomTabsNav: FC = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar style="light" />
      <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar }}>
        <Tab.Screen
          name="Learn"
          component={Learn}
          options={{
            tabBarIcon: ({ focused }) => renderTabBarIcon("Learn", focused),
            tabBarLabel: ({ focused }) => renderTabBarLabel("Learn", focused),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => renderTabBarIcon("Explore", focused),
            tabBarLabel: ({ focused }) => renderTabBarLabel("Explore", focused),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({ focused }) => renderTabBarIcon("Activity", focused),
            tabBarLabel: ({ focused }) =>
              renderTabBarLabel("Activity", focused),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused }) => renderTabBarIcon("Favorites", focused),
            tabBarLabel: ({ focused }) =>
              renderTabBarLabel("Favorites", focused),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => renderTabBarIcon("Account", focused),
            tabBarLabel: ({ focused }) => renderTabBarLabel("Account", focused),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabsNav;
