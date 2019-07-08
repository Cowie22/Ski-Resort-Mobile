import React from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { name, groomed, wait_time, vertical_feet, terrain, status, is_favorite, to_complete, id } = this.props.oneRunInfo;
    const blackDiamondIcon =
    <Icon
      name="diamond"
      size={18}
      color="white"
      backgroundColor="black"
    />
    return (
      this.props.currentRunID > 0 ?
      <ImageBackground style={styles.container} source={gifArray[Math.floor(Math.random() * gifArray.length)]}>
        <Text style={[styles.text]}>{name}</Text>
        <Text
        style={terrain === 'Black Diamond: Most Difficult' ? [styles.text, styles.blackDiamond] :
        terrain === 'Blue Square: More Difficult' ? [styles.text, styles.blueSquare] :
        terrain === 'Green Circle: Easiest Way Down' ? [styles.text, styles.greenCircle] :
        [styles.text, styles.terrainPark]}>{terrain}
        </Text>
        <Text style={groomed === 1 ? [styles.text, styles.goodToGo] :
        [styles.text, styles.moreDangerous]}>{groomed === 1 ? 'Groomed' : 'Not Groomed'}
        </Text>
        <Text style={status === 1 ? [styles.text, styles.goodToGo] :
        [styles.text, styles.moreDangerous]}>{status === 1 ? 'OPEN' : 'CLOSED'}</Text>
        <Text style={[styles.text]}>WAIT TIME: {wait_time}</Text>
        <Text style={[styles.text]}>{vertical_feet} Vertical Feet!</Text>
      </ImageBackground>
      :
      null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold',
  },
  text: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  blackDiamond: {
    color: '#000000',
  },
  blueSquare: {
    color: '#0062ff',
  },
  greenCircle: {
    color: '#008702',
  },
  terrainPark: {
    color: '#ff6200',
  },
  goodToGo: {
    color: '#008702',
  },
  moreDangerous: {
    color: 'rgb(125, 24, 24)',
  },
});

export default Display