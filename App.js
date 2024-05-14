import { Text, View } from 'react-native';
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './pages/Home/Home';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Home/>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

