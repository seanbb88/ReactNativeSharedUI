import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/Button/Button';

export default function App() {


  return (
    <View style={styles.container}>

      <AppButton onPress={() => { }} text="Button" buttonStyle={{ backGroundColor: "#E0E0E0", borderColor: "#255433", textColor: '#255433' }} />
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
