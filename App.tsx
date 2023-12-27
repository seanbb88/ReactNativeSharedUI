import { StyleSheet, View } from 'react-native';
import AppButton from './components/Button/Button';
import { ApplicationLoader, PaqeLoader } from './components';

export default function App() {


  return (
    <View style={styles.container}>
      <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} />
      <PaqeLoader />
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
