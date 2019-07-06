import React from 'react';
import { Animated, TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';
import vonn from '../../../images/vonn.png';

 class SkierDude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skierAnim: new Animated.ValueXY({ x: 50, y: -310 }),
    }
    this.handleSkierAnimation = this.handleSkierAnimation.bind(this);
  }
  handleSkierAnimation() {
    console.log('clicked')
    Animated.timing(this.state.skierAnim, {
      toValue: {x: 200, y: -200},
      duration: 3000,
    }).start()
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleSkierAnimation}>
          <Animated.Image
          style={[this.state.skierAnim.getLayout(), styles.skierImage]}
          source={vonn}
          >
          </Animated.Image>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 0,
    height: 0,
  },
  skierImage: {
    width: 70,
    height: 70,
    zIndex: 100,
  }
});

export default SkierDude