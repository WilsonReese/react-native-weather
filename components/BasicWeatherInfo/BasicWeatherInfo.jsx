import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./BasicWeatherInfo.style";
import { Txt } from "../../components/Txt/Txt";
import { Clock } from "../Clock/Clock";

export function BasicWeatherInfo({temp, interpretation, city}) {
  return (
    <>
      <View style={s.clock}>
        <Clock/>
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
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
