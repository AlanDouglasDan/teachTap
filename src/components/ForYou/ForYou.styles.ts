import { palette } from "core/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flexedRow: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 20,
  },
  flex1: {
    flex: 1,
  },
  header16: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.WHITE,
  },
  questionContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 8,
    gap: 10,
    marginBottom: 48,
  },
  semiheader22: {
    fontSize: 22,
    fontWeight: "500",
    color: palette.WHITE,
  },
  semiheader16: {
    fontSize: 16,
    fontWeight: "500",
    color: palette.WHITE,
  },
  optionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(43, 43, 43, 0.7)",
    marginBottom: 8,
  },
  header13: {
    fontSize: 13,
    color: palette.WHITE,
  },
  flexedRow2: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loader: {
    width: 32,
    height: 32,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  rightContent: {
    alignItems: "center",
    gap: 24,
    justifyContent: "flex-end",
  },
  semiheader12: {
    fontSize: 12,
    fontWeight: "500",
    color: palette.WHITE,
    textAlign: "center",
    marginTop: 4,
  },
  icon: {
    width: 40,
    height: 25,
  },
  gap: {
    gap: 20,
    marginTop: 4,
    flex: 1,
  },
});
