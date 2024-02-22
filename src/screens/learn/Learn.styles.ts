import { palette } from "core/styles";
import { StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.BLACK,
  },
  innerContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    ...ifIphoneX({ paddingBottom: 0 }, { paddingBottom: 30 }),
  },
  bgImage: {
    width: wp(100),
    height: "100%",
    justifyContent: "space-between",
  },
});
