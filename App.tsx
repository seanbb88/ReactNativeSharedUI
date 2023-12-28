import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// AVAILABLE COMPONENTS - HIDE/SHOW BY COMMENTING THEM OUT
import AppButton from './components/Button/Button';
import { ApplicationLoader, FullScreenLoader, PaqeLoader } from './components';
import { FadeView, LiquidSwipe } from './animations';
import { runOnUI } from 'react-native-reanimated';
import { useEffect } from 'react';

export default function App() {


  const handleShitHere = (e: any) => {
    'worklet'
    console.log("E BITCH", e)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* BUTTONS */}
        {/* 
        <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} /> */}

        {/* LISTS */}
        {/* <SwipeableList /> */}




        <LiquidSwipe data="hey" onChange={handleShitHere} />

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
