import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

// AVAILABLE COMPONENTS - HIDE/SHOW BY COMMENTING THEM OUT
import AppButton from './components/Button/Button';
import { ApplicationLoader, FullScreenLoader, PaqeLoader } from './components';
import { TabBar, FadeView, LiquidSwipe } from './animations';
import {
  faCoffee,
  faTrash,
  faUser,
  faList,
  faReply,
} from '@fortawesome/free-solid-svg-icons';

const tabs = [
  {
    name: 'coffee',
    item: faCoffee,
  },
  {
    name: 'list',
    item: faList,
  },
  {
    name: 'reply',
    item: faReply,
  },
];

export default function App() {


  const handleTabbyShit = (index: number) => {
    console.log("index we be at", index)
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
        <TabBar tabs={tabs} backGroundColor="#255433" onTabChange={handleTabbyShit} />


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
