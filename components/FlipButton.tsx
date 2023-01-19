import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

export const FlipButton = ({flip, flip2, onPress, disabledLength } : {flip:React.ComponentProps<typeof FontAwesome>['name'], flip2: React.ComponentProps<typeof FontAwesome>['name'], onPress: Function, disabledLength: number}) => {
  const [isDisabled, setDisabled] = useState(false);
  const [isAction, setIsAction] = useState(flip);

  const handlePress = async () => {
    await onPress();
    setDisabled(true);
    setTimeout(() => setDisabled(false), disabledLength);
    toggleIsAction()
  };
  const toggleIsAction = () => {
    if (isAction === flip){
        setIsAction((isAction)=> flip2);
    }else if (isAction === flip2){
        setIsAction((isAction)=> flip);
    }
  }

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
    
    <TabBarIcon name={isAction} color='white'/>
  </TouchableOpacity>
  );
};
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }
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
      },
      appButtonContainer: {
        justifyContent:"center",
        alignItems:"center",
        height:100,
        
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        borderRadius:12
      },
    appButtonDisabled: {
      backgroundColor: "#F20A7B"
    }
  });
  