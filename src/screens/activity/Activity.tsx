import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabsNavParams } from "navigation/bottom-tabs-nav/BottomTabsNav";
import React, { FC } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./Activity.styles";

export interface Subscription {
  remove: () => void;
}

const Activity: FC<BottomTabScreenProps<BottomTabsNavParams, "Activity">> = ({
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Activity</Text>
      </ScrollView>
    </View>
  );
};

export default Activity;
