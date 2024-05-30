import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {},
  interpretation: {
    alignSelf: "flex-end",
    transform: [{rotate: "-90deg"}]
  },
  interpretation_txt: {
    fontSize: 16,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  temp: {
    fontSize: 130,
  },
  image: {
    height: 100,
    width: 120,
  },
});
