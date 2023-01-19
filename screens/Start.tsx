import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { TextButton } from '../components/TextButton';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Start({ navigation }: RootStackScreenProps<'Start'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/STFClogo.png')} resizeMode={"contain"} style={styles.image}>
      <TextButton onPress={() => navigation.navigate("inPlay", {screen: "Timer"})} title="Start Session!" disabledLength={100}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  image : {
    flex: 1,
    justifyContent: "center"
  }
});
