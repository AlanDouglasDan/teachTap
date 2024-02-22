import { images } from "core/images";
import { formatTime } from "core/utils";
import { FC } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

import styles from "./Header.styles";

interface HeaderProps {
  setActiveTab: (data: any) => void;
  timeSpent: number;
  activeTab: string;
}

const Header: FC<HeaderProps> = ({ setActiveTab, timeSpent, activeTab }) => {
  return (
    <View style={styles.navContainer}>
      <View
        style={[styles.flexedRow2, { gap: 4, position: "absolute", left: 20 }]}
      >
        <Image
          source={images.timer}
          resizeMode="contain"
          style={styles.navIcon}
        />

        <Text style={styles.text14}>{formatTime(timeSpent)}</Text>
      </View>

      <View style={[styles.flexedRow2, { gap: 20 }]}>
        <TouchableOpacity
          style={styles.center}
          onPress={() => setActiveTab("following")}
        >
          <Text
            style={[
              styles.header16,
              { opacity: activeTab === "following" ? 1 : 0.6 },
            ]}
          >
            Following
          </Text>

          {activeTab === "following" ? (
            <View style={styles.line} />
          ) : (
            <View style={{ height: 9 }} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.center}
          onPress={() => setActiveTab("for you")}
        >
          <Text
            style={[
              styles.header16,
              { opacity: activeTab === "for you" ? 1 : 0.6 },
            ]}
          >
            For You
          </Text>

          {activeTab === "for you" ? (
            <View style={styles.line} />
          ) : (
            <View style={{ height: 9 }} />
          )}
        </TouchableOpacity>
      </View>

      <Image
        source={images.search}
        resizeMode="contain"
        style={[styles.navIcon, { position: "absolute", right: 20 }]}
      />
    </View>
  );
};

export default Header;
