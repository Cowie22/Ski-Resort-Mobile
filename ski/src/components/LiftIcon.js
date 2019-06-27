import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const LiftIcon = (props) => {
  return (
    <View>
      <Button
        icon={
          <Icon
            name="snowflake-o"
            size={22}
            color="#2D68C4"
          />
        }
        buttonStyle={{position: "absolute", top: 40, left: 74, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 50 }}
        id={1}
        onPress={() => props.handleIconPress(id)}
        type="clear"
        TouchableOpacity={0.2}
      />
      <Button
        icon={
          <Icon
            name="snowflake-o"
            size={22}
            color="#2D68C4"
          />
        }
        buttonStyle={{position: "absolute", top: 70, left: 74, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 50 }}
        onPress={() => props.handleIconPress(1)}
        type="clear"
        TouchableOpacity={0.2}
      />

    </View>
  )
}

export default LiftIcon