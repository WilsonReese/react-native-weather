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
        <Txt>Interpretation</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temp}>Temp</Txt>
        <Image style={s.image}/>
      </View>
    </>
  );
}
