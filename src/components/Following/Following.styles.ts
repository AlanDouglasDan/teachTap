import { palette } from "core/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  followingContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "87%",
    paddingHorizontal: "12.5%",
  },
  header18: {
    fontSize: 18,
    fontWeight: "700",
    color: palette.WHITE,
  },
  text15: {
    fontSize: 15,
    color: palette.WHITE,
    opacity: 0.6,
    marginTop: 4,
    textAlign: "center",
  },
  followingImage: {
    width: "100%",
    height: 343,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 24,
    paddingBottom: 24,
  },
  imageStyle: {
    borderRadius: 8,
  },
  header17: {
    fontSize: 17,
    fontWeight: "700",
    color: palette.WHITE,
    marginTop: 8,
  },
  button: {
    backgroundColor: palette.GREEN,
    padding: 11,
    width: "70%",
    borderRadius: 6,
    alignItems: "center",
    marginTop: 16,
  },
  semiheader13: {
    fontSize: 13,
    fontWeight: "500",
    color: palette.WHITE,
  },
});
