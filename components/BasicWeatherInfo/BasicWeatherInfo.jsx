import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./BasicWeatherInfo.style";
import { Txt } from "../../components/Txt/Txt";

export function BasicWeatherInfo({}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>Sunny</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temp}>-25°</Txt>
        <Image style={s.image}/>
      </View>
    </>
  );
}
