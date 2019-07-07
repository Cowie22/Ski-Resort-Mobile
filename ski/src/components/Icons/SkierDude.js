import React from 'react';
import { Animated, TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';
import vonn from '../../../images/vonn.png';
import SkiContext from '../../Context/SkiContext';

 class SkierDude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // skierAnim: new Animated.ValueXY({ x: 50, y: -310 }),
    }
    // this.handleSkierAnimation = this.handleSkierAnimation.bind(this);
  }
  // handleSkierAnimation() {
  //   Animated.loop(
  //     Animated.timing(this.state.skierAnim, {
  //       toValue: {x: 200, y: -200},
  //       duration: 3000,
  //     }), {
  //       iterations: 4
  //     }
  //   ).start()
  // }
  render() {
    return (
    <SkiContext.Consumer>
      {({skierStart, skierMove}) => {
      {console.log('context', skierStart)}
        <View style={styles.container}>
            <TouchableHighlight onPress={() => skierMove()}>
              <Animated.Image
              style={[styles.skierImage]}
              source={vonn}
              >
              </Animated.Image>
            </TouchableHighlight>
        </View>
      }}
    </SkiContext.Consumer>
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