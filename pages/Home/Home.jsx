import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/Txt/Txt";
import { BasicWeatherInfo } from "../../components/BasicWeatherInfo/BasicWeatherInfo";

export function Home({}) {
  return (
    <>
      <View style={s.basic_weather_info}>
        <BasicWeatherInfo/>
      </View>
      <View style={s.search_bar_container}>
        <Txt style={s.text}>Search</Txt>
      </View>
      <View style={s.advanced_weather_info}>
        <Txt style={s.text}>Extra info</Txt>
      </View>
    </>
  );
}
