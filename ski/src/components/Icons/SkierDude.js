import React from 'react';
import { Animated, TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';
import vonn from '../../../images/vonn.png';
import SkiContext from '../../Context/SkiContext';

 class SkierDude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { xValue, yValue } = this.props.oneRunInfo
    this.props.currentRunID > 0 ? SkiContext._currentValue.skierMove(200, -80) : null
    return (
    <View style={styles.container}>
      <Animated.Image
      style={[SkiContext._currentValue.skierStart.getLayout(), styles.skierImage]}
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