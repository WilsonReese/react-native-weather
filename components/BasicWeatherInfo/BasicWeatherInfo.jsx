import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./BasicWeatherInfo.style";
import { Txt } from "../../components/Txt/Txt";

export function BasicWeatherInfo({temp, interpretation}) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temp}>{temp}°</Txt>
        <Image style={s.image} source={interpretation.image}/>
      </View>
    </>
  );
}
