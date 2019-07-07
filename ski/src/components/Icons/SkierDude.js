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
    this.handleSkierStart = this.handleSkierStart.bind(this);
    this.skierMove = this.skierMove.bind(this);
  }
  handleSkierStart() {
    const { xStart, yStart } = this.props.oneRunInfo;
    this.setState({
      skierStart: new Animated.ValueXY({ x: xStart, y: yStart})
    })
  }
  skierMove() {
    const { xEnd, yEnd } = this.props.oneRunInfo;
    Animated.loop(
      Animated.timing(this.state.skierStart, {
        toValue: {x: xEnd, y: yEnd},
        duration: 3000,
      }), {
        iterations: 4
      }
    ).start()
  }
  render() {
    const { xValue, yValue } = this.props.oneRunInfo;
    this.props.currentRunID > 0 ? this.handleSkierStart() && this.skierMove() : null
    return (
    <View style={styles.container}>
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