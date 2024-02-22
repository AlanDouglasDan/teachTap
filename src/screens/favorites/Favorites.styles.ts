import { palette } from "core/styles";
import { StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

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
});
