import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {IconButton } from '../components/IconButton';
import Clock from '../components/Clock';
import { FlipButton } from '../components/FlipButton';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TextButton } from '../components/TextButton';

export default function Timer({ navigation }: RootTabScreenProps<'inPlay'>) {
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <View style={[styles.container, {flexDirection:"column"}]}>
      <View style={[styles.topThird, {flexDirection:"row"}]}>
      <TextButton title="Restart Session" onPress={()=>{navigation.navigate("Start")}} disabledLength={0}/>
      </View>
      <View style={styles.clock}>
      <Clock fourKey={key} isFourPlaying={isPlaying} />
      </View>
      <View style={[styles.controls, {flexDirection:"row"}]}>
        <View style={[styles.button, ]}>
          <IconButton icon="refresh" onPress={() => setKey((prevKey) => prevKey + 1)} disabledLength={0}/>
        </View>
        <View style={styles.button}>
          <FlipButton onPress={() => setIsPlaying(current => !current)} disabledLength={0} flip={'pause'} flip2={'play'}/>
        </View>
        {/* <View style={styles.button}>
          <AppButton title="play" onPress={toggleToPlaying} disabledLength={0}/>
        </View> */}
        
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>Timer</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <AppButton title="restart" onPress={() => setFourKey((prevKey) => prevKey + 1)} disabledLength={0}/> */}
      {/* <AppButton title="pause" onPress={toggleToPause} disabledLength={0}/> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <AppButton title="play" onPress={toggleToPlaying} disabledLength={0}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topThird:{
    flex: 1,
    padding:25,
    justifyContent:"center"
  },
  clock:{
    flex:6,
    paddingBottom:100
  },
  controls:{
    flex: 7,
    justifyContent:"space-around"
  },
  button:{
    flex: 1, 
    padding:25,
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
