import { images } from "core/images";
import { FC } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";

import styles from "./Following.styles";

interface FollowingProps {
  data: any;
}

const Following: FC<FollowingProps> = ({ data }) => {
  return (
    <View style={styles.followingContainer}>
      <Text style={styles.header18}>Trending Subjects</Text>
      <Text style={styles.text15}>
        Follow an account to see their latest content here.
      </Text>

      <ImageBackground
        source={images.dummyFollowing1}
        resizeMode="cover"
        style={styles.followingImage}
        imageStyle={styles.imageStyle}
      >
        <Image
          source={{ uri: data?.user.avatar }}
          resizeMode="contain"
          style={{ width: 56, height: 56 }}
        />

        <Text style={styles.header17}>{data?.user.name}</Text>
        <Text style={[styles.text15, { opacity: 1 }]}>
          @{data?.user.name.replace(/\s/g, "").toLowerCase()}
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.semiheader13}>Follow</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Following;
