import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

export const IconButton = ({ icon, onPress, disabledLength } : {icon: React.ComponentProps<typeof FontAwesome>['name'], onPress: Function, disabledLength: number}) => {
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
    <TabBarIcon name={icon} color='white'/>
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
        borderRadius:12
      },
    appButtonDisabled: {
      backgroundColor: "#F20A7B"
    }
  });