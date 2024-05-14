import { ImageBackground, Text, View } from 'react-native';
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './pages/Home/Home';
import backgroundImage from "./assets/background.png";



export default function App() {
    


  return (
    <ImageBackground imageStyle={s.img} style={s.img_background_view} source={backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

