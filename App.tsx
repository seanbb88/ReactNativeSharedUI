import { StyleSheet, View } from 'react-native';
import AppButton from './components/Button/Button';
import { ApplicationLoader, FullScreenLoader, PaqeLoader } from './components';

export default function App() {


  return (
    <View style={styles.container}>
      {/* BUTTONS */}
      <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} />
      {/* LOADERS */}
      {/* <PaqeLoader /> */}
      {/* <ApplicationLoader /> */}
      {/* <FullScreenLoader /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
