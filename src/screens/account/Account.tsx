import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabsNavParams } from "navigation/bottom-tabs-nav/BottomTabsNav";
import React, { FC } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./Account.styles";

export interface Subscription {
  remove: () => void;
}

const Account: FC<BottomTabScreenProps<BottomTabsNavParams, "Account">> = ({
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Account</Text>
      </ScrollView>
    </View>
  );
};

export default Account;
