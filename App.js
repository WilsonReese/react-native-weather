import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import backgroundImage from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { MeteoAPI } from "./api/weather";
import {
  useFonts,
  Saira_400Regular,
  Saira_700Bold,
} from "@expo-google-fonts/saira";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();

  const [areFontsLoaded] = useFonts({
    Saira_400Regular,
    Saira_700Bold,
  });

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates]);

  useEffect(() => {
    getUserCoordinates();
  }, []);

  async function fetchWeatherByCoords(coords) {
    const weatherByCoords = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherByCoords);
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", long: "2.35" });
    }
  }

  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background_view}
      source={backgroundImage}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {areFontsLoaded && <Home />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
