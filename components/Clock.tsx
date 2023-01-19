import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, AppState } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const FourMinuteCountDown = ({key ,isPlaying, appState}:{key:number, isPlaying: boolean, appState:string}) => (
  <CountdownCircleTimer
    key={key}
    isPlaying ={isPlaying}
    duration={240}
    updateInterval= {0}
    // onUpdate .={()}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[200, 100, 50, 0]}
    onComplete={()=> {return { shouldRepeat: true, delay: 15 }}}
    onUpdate={(remainingTime) =>{annouce(remainingTime)}}
  >
    {({ remainingTime }) => <Text>{`${Math.floor(remainingTime / 60)}:${Math.round(remainingTime % 60).toString().padStart(2, '0')}`}</Text>}
  </CountdownCircleTimer>
)
async function annouce(remainingTime:number) {
  console.log(remainingTime + " seconds remaining");
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    playsInSilentModeIOS: true,
  });
  let sound = new Audio.Sound()
  if (remainingTime==120){
    console.log('Playing 2-minute warning Sound');
    await sound.loadAsync(require('../assets/TwoMinuteWarning.mp3'));
    await sound.playAsync();
  } else if (remainingTime==60){
    console.log('Playing 1-minute warning Sound');
    await sound.loadAsync(require('../assets/FinalWhistle.mp3'));
    await sound.playAsync();
  }else if(remainingTime==0){
    console.log('Playing final whistle Sound');
    await sound.loadAsync(require('../assets/FinalWhistle.mp3'));
    await sound.playAsync()
  }else{
  }
}

const HourCountDown = ({isPlaying}:{ isPlaying: boolean}) => (
  <CountdownCircleTimer
    isPlaying ={isPlaying}
    duration={3600}
    updateInterval= {240}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    size={100}
    strokeWidth={8}
    trailStrokeWidth={4}
    colorsTime={[7, 5, 2, 0]}
    onComplete={()=> {return { shouldRepeat: true, delay: 1.5 }}}
  >
    {({ remainingTime }) => <Text style={styles.getStartedText}>{`${Math.floor(remainingTime / 255)}`}</Text>}
  </CountdownCircleTimer>
)
export default function Clock({fourKey, isFourPlaying }: {fourKey: number, isFourPlaying: boolean}) {
  const currentState = useRef(AppState.currentState);
  const [state, setState] = useState(currentState.current);
  
  useEffect(() => {
    const handleChange = AppState.addEventListener("change", changedState => {
  
      currentState.current = changedState;
      setState(currentState.current);
    });
  
    return () => {
      handleChange.remove();
    };
  }, []);
  let isHourPlaying = true;
  while(state == "active" || state == "background" || state == "inactive"){
    return (
    <View style={styles.parent}>
      <View style={styles.getStartedContainer}></View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.timers}>
        <FourMinuteCountDown key={fourKey} isPlaying={isFourPlaying} appState={state}/>
        </TouchableOpacity>
        <Text>Current state is: {state}</Text>
        <TouchableOpacity style={styles.timers} onPress={()=>(isHourPlaying=!isHourPlaying)}>
        <HourCountDown isPlaying={isHourPlaying}/>
        </TouchableOpacity>
      </View>
      <View style={styles.getStartedContainer}></View>
    </View>
  );
  }
  
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection:"row",
    backgroundColor:"pink"
  },
  main: {
    flex: 2,
  },
  timers:{
    alignItems:"center",
    paddingTop:20
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
  function componentDidMount() {
    throw new Error('Function not implemented.');
  }

