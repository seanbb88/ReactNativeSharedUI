import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
//import Iconicons from '@expo/vector-icons/Ionicons'

// AVAILABLE COMPONENTS - HIDE/SHOW BY COMMENTING THEM OUT
// import AppButton from './components/Button/Button';
import { AppTitle, ApplicationLoader, FullScreenLoader, PaqeLoader } from './components';
// import { TabBar, FadeView, LiquidSwipe } from './animations';



// const tabs = [
//   {
//     name: 'Home',
//     item: <Iconicons color="black" size={25} name="home-outline" />,
//   },
//   {
//     name: 'MyList',
//     item: <Iconicons color="black" size={25} name="list-outline" />,
//   },
//   {
//     name: 'Settings',
//     item: <Iconicons color="black" size={25} name="people-outline" />,
//   },
// ];

let customFonts = {
  'Oswald': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);


  const handleTabbyShit = (index: number) => {
    console.log("index we be at", index)
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* BUTTONS */}
        {/* 
        <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} /> */}

        {/* LISTS */}
        {/* <SwipeableList /> */}

        {/* TABS */}
        {/* <TabBar tabs={tabs} backGroundColor="#255433" onTabChange={handleTabbyShit} /> */}


        {/* TITLES */}
        <AppTitle title="Now Paying" />

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
