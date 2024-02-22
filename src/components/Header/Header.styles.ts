import { palette } from "core/styles";
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 56 : 48,
    paddingHorizontal: 20,
    // borderWidth: 3,
    // borderColor: "red",
  },
  header16: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.WHITE,
  },
  text14: {
    fontSize: 14,
    color: palette.WHITE,
    opacity: 0.6,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 30,
    height: 4,
    backgroundColor: palette.WHITE,
    marginTop: 5,
  },
  flexedRow2: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navIcon: {
    width: 22,
    height: 22,
  },
});
