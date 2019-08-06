import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Another component for icons for separation of concerns.  Need to refactor to stateless function, originally had state
// Holding off because state might be included
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
        name="gondola"
        size={22}
        color="#2D68C4"
      />;
      // Mini for small lift because it's too tight on the image
      const miniSnowIcon =
      <Icon
        name="gondola"
        size={14}
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
        <Button
          icon={snowIcon}
          style={{top: -8, left: -124}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(9)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: -52, left: -162}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(10)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: -108, left: -88}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(11)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={snowIcon}
          style={{top: -104, left: -14}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(12)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={miniSnowIcon}
          style={{top: 34, left: -104}}
          buttonStyle={styles.btn}
          onPress={() => handleIcons(13)}
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