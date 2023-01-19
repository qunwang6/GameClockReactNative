import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { TextButton } from '../components/TextButton';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

async function playGoal() {
  console.log('Loading Sound');
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    playsInSilentModeIOS: true,
});
  const sound = new Audio.Sound()
  await sound.loadAsync(require('../assets/Goal.mp3')
  );

  console.log('Playing Sound');
  await sound.playAsync();
}
async function playDefense() {
  console.log('Loading Sound');
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    playsInSilentModeIOS: true,
});
  const sound = new Audio.Sound()
  await sound.loadAsync(require('../assets/DefenseChant.mp3')
  );

  console.log('Playing Sound');
  await sound.playAsync();
}

export default function SoundEffects({ navigation }: RootStackScreenProps<"Sound Effects">) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Text style={styles.title}>Sound Effects</Text>
      <TextButton title={"GOAL!"} onPress={playGoal} disabledLength={3000}/>
      <TextButton title={"DEFENSE"} onPress={playDefense} disabledLength={4000}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});