import { palette } from "core/styles";
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  tabBar: {
    paddingBottom: Platform.OS === "ios" ? 45 : 5,
    height: Platform.OS === "ios" ? 95 : 60,
    backgroundColor: palette.BLACK,
    borderTopWidth: 0.33,
    borderTopColor: "rgba(255,255,255,0.2)",
  },
  icon: {
    height: 20,
    width: 20,
    marginBottom: Platform.OS === "ios" ? -5 : -15,
  },
  flexedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  text10: {
    fontSize: 10,
    fontWeight: "500",
    color: palette.WHITE,
    opacity: 0.4,
  },
  text10Focus: {
    fontSize: 10,
    fontWeight: "500",
    color: palette.WHITE,
  },
});
