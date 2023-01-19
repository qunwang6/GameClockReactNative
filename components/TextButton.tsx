import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Themed';

export const TextButton = ({ title, onPress, disabledLength } : {title: string, onPress: Function, disabledLength: number}) => {
  const [isDisabled, setDisabled] = useState(false);

  const handlePress = async () => {
    await onPress();
    setDisabled(true);
    setTimeout(() => setDisabled(false), disabledLength);
  };
  return (
  <TouchableOpacity
  onPress={handlePress}
  style={[
    styles.appButtonContainer,
    isDisabled && styles.appButton,
    !isDisabled && styles.appButtonDisabled
  ]}
  disabled={isDisabled}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#F20A7B",
      },
      appButton: {
        padding: 12,
        backgroundColor: "#A8FF4F",
        width: "46%",
        height: 60,
      },
      appButtonText: {
        fontSize: 17,
        padding:15,
        color:"black"
      },
      appButtonContainer: {
        justifyContent:"center",
        alignItems:"center",
        height:50,
        borderRadius:12
      },
    appButtonDisabled: {
      backgroundColor: "#c5ff08"
    }
  });