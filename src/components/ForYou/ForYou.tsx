import { images } from "core/images";
import { FC } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

import styles from "./ForYou.styles";

interface ForYouProps {
  data: any;
}

const ForYou: FC<ForYouProps> = ({ data }) => {
  return (
    <View style={[styles.flexedRow, { paddingHorizontal: 20 }]}>
      <View style={styles.flex1}>
        <View style={styles.questionContainer}>
          <Text style={styles.semiheader22}>{data?.question}</Text>
        </View>

        {data?.options.map((option) => (
          <TouchableOpacity
            style={styles.optionContainer}
            key={option.id}
            activeOpacity={0.5}
          >
            <Text style={styles.semiheader16}>{option.answer}</Text>
          </TouchableOpacity>
        ))}

        <View style={{ marginTop: 8 }}>
          <Text style={styles.header16}>{data?.user.name}</Text>

          <View style={styles.flexedRow2}>
            <View style={styles.gap}>
              <Text style={styles.header13}>{data?.description}</Text>

              <Text style={styles.header13}>{data?.playlist}</Text>
            </View>

            <Image
              source={images.loader}
              style={styles.loader}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={styles.rightContent}>
        <Image
          source={{ uri: data?.user.avatar }}
          style={styles.avatar}
          resizeMode="contain"
        />

        <Image source={images.audio} resizeMode="contain" style={styles.icon} />

        <View>
          <Image
            source={images.heart}
            resizeMode="contain"
            style={styles.icon}
          />

          <Text style={styles.semiheader12}>87</Text>
        </View>

        <View>
          <Image
            source={images.comment}
            resizeMode="contain"
            style={styles.icon}
          />

          <Text style={styles.semiheader12}>2</Text>
        </View>

        <View>
          <Image
            source={images.bookmark}
            resizeMode="contain"
            style={styles.icon}
          />

          <Text style={styles.semiheader12}>203</Text>
        </View>

        <View>
          <Image
            source={images.share}
            resizeMode="contain"
            style={styles.icon}
          />

          <Text style={styles.semiheader12}>17</Text>
        </View>
      </View>
    </View>
  );
};

export default ForYou;
