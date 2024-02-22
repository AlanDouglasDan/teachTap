import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabsNavParams } from "navigation/bottom-tabs-nav/BottomTabsNav";
import React, { FC } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./Explore.styles";

export interface Subscription {
  remove: () => void;
}

const Explore: FC<BottomTabScreenProps<BottomTabsNavParams, "Explore">> = ({
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Explore</Text>
      </ScrollView>
    </View>
  );
};

export default Explore;
