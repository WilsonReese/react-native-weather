import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./Home.style";

export function Home({}) {
  return (
    <>
      <View style={s.basic_weather_info}>
        <Text style={s.text}>Weather info</Text>
      </View>
      <View style={s.search_bar_container}>
        <Text style={s.text}>Search</Text>
      </View>
      <View style={s.advanced_weather_info}>
        <Text style={s.text}>Extra info</Text>
      </View>
    </>
  );
}
