import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Following } from "components/Following";
import { ForYou } from "components/ForYou";
import { Header } from "components/Header";
import { BottomTabsNavParams } from "navigation/bottom-tabs-nav/BottomTabsNav";
import React, { FC, useState, useEffect } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { useLearn } from "store/learn/hooks";

import styles from "./Learn.styles";

const Learn: FC<BottomTabScreenProps<BottomTabsNavParams, "Learn">> = () => {
  const { getFollowing, getForYou, following, forYou } = useLearn();

  const [activeTab, setActiveTab] = useState<"following" | "for you">(
    "following",
  );
  const [timeSpent, setTimeSpent] = useState<number>(0);

  useEffect(() => {
    getFollowing();
    getForYou();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1000); // Updates every second
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {activeTab === "following" ? (
          <>
            <Header
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              timeSpent={timeSpent}
            />

            <Following data={following} />
          </>
        ) : (
          <ImageBackground
            source={{ uri: forYou?.image }}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <Header
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              timeSpent={timeSpent}
            />

            <ForYou data={forYou} />
          </ImageBackground>
        )}
      </ScrollView>
    </View>
  );
};

export default Learn;
