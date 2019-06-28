import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LiftIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // Icon shared amongst all of the chairlifts, seen in all button icons below
    const snowIcon =
      <Icon
        name="snowflake-o"
        size={22}
        color="#2D68C4"
      />;
      // Destructuring so I don't have to write this.props,
      // handleIcons controls which part of the mountain is displayed
      const{ handleIcons } = this.props;
    return (
      <View>
        <Button
          icon={snowIcon}
          style={{top: 34, left: 74}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(1)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: -52, left: 52}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(2)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: -120, left: 80}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(3)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: 68, left: -64}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(4)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: 102, left: -134}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(5)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: 52, left: -144}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(6)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: 72, left: -193}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(7)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: 10, left: -74}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(8)}
          type="clear"
          TouchableOpacity={0.2}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  // Shared Style amongst all buttons, unique style for positioning on the image found in
  // Style portion of each button.  Below style used in buttonStyle
  btn: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 50,
  },
})

export default LiftIcon