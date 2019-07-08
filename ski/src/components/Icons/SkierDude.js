import React from 'react';
import { Animated, TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';
import vonn from '../../../images/vonn.png';
import SkiContext from '../../Context/SkiContext';

 class SkierDude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skierStart: new Animated.ValueXY({ x: 50, y: -310 }),
    }
    this.skierMove = this.skierMove.bind(this);
  }
  // Handles the skier movement animation
  // The database has the initial start value for each run and the end value
  // First the animation goes from default to start value
  // Then from start value to end value
  skierMove() {
    const { xStart, yStart, xEnd, yEnd } = this.props.oneRunInfo;
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.skierStart, {
          toValue: {x: xStart, y: yStart},
          duration: 1000,
        }, this.state.skierStart.setValue({x: parseInt(xStart), y: parseInt(yStart)})),
        Animated.timing(this.state.skierStart, {
          toValue: {x: xEnd, y: yEnd},
          duration: 2000,
        })
      ]), {
        iterations: 4
      }
    ).start()
  }
  render() {
    this.props.currentRunID > 0 ? this.skierMove() : null;
    return (
    <View style={[styles.container]}>
      <Animated.Image
      style={[this.state.skierStart.getLayout(), styles.skierImage]}
      source={vonn}
      >
      </Animated.Image>
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
  },
});

export default SkierDude