import { StyleSheet, View, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
// AVAILABLE COMPONENTS - HIDE/SHOW BY COMMENTING THEM OUT
import AppButton from './components/Button/Button';
import { ApplicationLoader, FullScreenLoader, PaqeLoader } from './components';
import { TabBar, FadeView, LiquidSwipe } from './animations';
import * as SplashScreen from 'expo-splash-screen';

import Iconicons from '@expo/vector-icons/Ionicons'
import { useCallback } from 'react';


const tabs = [
  {
    name: 'Home',
    item: <Iconicons color="black" size={25} name="home-outline" />,
  },
  {
    name: 'MyList',
    item: <Iconicons color="black" size={25} name="list-outline" />,
  },
  {
    name: 'Settings',
    item: <Iconicons color="black" size={25} name="people-outline" />,
  },
];


export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  const handleTabbyShit = (index: number) => {
    console.log("index we be at", index)
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* BUTTONS */}
        {/* 
        <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} /> */}

        {/* LISTS */}
        {/* <SwipeableList /> */}

        {/* TABS */}
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <TabBar tabs={tabs} backGroundColor="#255433" onTabChange={handleTabbyShit} />
        </ScrollView>



        {/* <LiquidSwipe /> */}

        {/* LOADERS */}
        {/* <PaqeLoader /> */}
        {/* <ApplicationLoader /> */}
        {/* <FullScreenLoader visible={true} /> */}

        {/* ANIMATIONS */}
        {/* <FadeView duration={1200}>
          <Text>Fadin in and out babbey</Text>
        </FadeView> */}


      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
