import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/Txt/Txt";
import { BasicWeatherInfo } from "../../components/BasicWeatherInfo/BasicWeatherInfo";
import { getWeatherInterpretation } from "../../utils/weather-utils";
import { AdvancedWeatherInfo } from "../../components/AdvancedWeatherInfo/AdvancedWeatherInfo";

export function Home({ weather, city }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );

  return (
    <>
      <View style={s.basic_weather_info}>
        <BasicWeatherInfo
          city={city}
          interpretation={currentInterpretation}
          temp={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={s.search_bar_container}>
        <Txt style={s.text}>Search</Txt>
      </View>
      <View style={s.advanced_weather_info}>
        <AdvancedWeatherInfo
          windspeed={currentWeather.windspeed}
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </>
  );
}
