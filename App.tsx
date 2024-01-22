import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Iconicons from '@expo/vector-icons/Ionicons'

// AVAILABLE COMPONENTS - HIDE/SHOW BY COMMENTING THEM OUT
import AppButton from './components/Button/Button';
import { AppTitle, FullScreenLoader, MiniModal, PaqeLoader } from './components';
import { TabBar, FadeView, LiquidSwipe, AnimatedInput, NowPlayingLoader, BreathingView } from './animations';
import AnimatedToggle from './animations/toggle/AnimatedToggle/AnimatedToggle';



const tabs = [
  {
    name: 'Home',
    item: <Iconicons color="black" size={25} name="videocam-outline" />,
  },
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

let customFonts = {
  'Oswald': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');

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


        {/* <AppButton optionalStyling={{ alignSelf: 'center' }} text="create account" onPress={() => { }} buttonStyle={{ textColor: "black", isLink: true }} />

        <View style={{ marginTop: 60, flex: 1, width: '80%' }}>
          <AnimatedInput
            placeholder='Enter your password'
            value={inputValue}
            inputColor="white"
            optionalStyling={{ marginTop: 8 }}
            obviscateText={true}
            onChangeText={(text) => setInputValue(text)}
          />
        </View> */}
        <BreathingView><Text style={{ color: 'white', fontSize: 25 }}>Here He Here He</Text></BreathingView>
        <AnimatedToggle
          optionOne='watched'
          optionTwo='unwatched'
          onToggle={(e) => console.log("DA TOGGLE", e)}
        />

        {/* <LiquidSwipe /> */}
        <MiniModal
          isOpen={true}
          handleToggleModal={() => { }}
          header='Header'
          modalContent={<Text>Hey</Text>}

        />

        {/* LOADERS */}
        {/* <PaqeLoader /> */}
        {/* <ApplicationLoader /> */}
        {/* <FullScreenLoader visible={true} /> */}
        {/* <NowPlayingLoader /> */}

        {/* ANIMATIONS */}
        {/* <FadeView duration={1200}>
          <Text>Fadin in and out babbey</Text>
        </FadeView> */}


      </View>

      {/* TABS */}
      <TabBar tabs={tabs} backGroundColor="#255433" onTabChange={handleTabbyShit} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#255433',
    alignItems: 'center',
  },
});
