import React from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import skiGif1 from '../../../images/gifs/skiGif1.gif';
import skiGif2 from '../../../images/gifs/skiGif2.gif';
import skiGif3 from '../../../images/gifs/skiGif3.gif';
import skiGif4 from '../../../images/gifs/skiGif4.gif';
import skiGif5 from '../../../images/gifs/skiGif5.gif';
import skiGif6 from '../../../images/gifs/skiGif6.gif';
import skiGif7 from '../../../images/gifs/skiGif7.gif';
import skiGif8 from '../../../images/gifs/skiGif8.gif';
import skiGif9 from '../../../images/gifs/skiGif9.gif';
import skiGif10 from '../../../images/gifs/skiGif10.gif';

const gifArray = [skiGif1, skiGif2, skiGif3, skiGif4, skiGif5, skiGif6, skiGif7, skiGif8, skiGif9, skiGif10];


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
      id > 0 ?
      <ImageBackground style={styles.container} source={gifArray[Math.floor(Math.random() * gifArray.length)]}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.terrain}>{terrain}</Text>
        <Text style={styles.groomed}>{groomed === 1 ? 'Groomed' : 'Not Groomed'}</Text>
        <Text style={styles.status}>{status === 1 ? 'OPEN' : 'CLOSED'}</Text>
        <Text style={styles.waitTime}>{wait_time}</Text>
        <Text style={styles.verticalFeet}>{vertical_feet} Vertical Feet!</Text>
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
    // backgroundImage: url('https://media2.giphy.com/media/YczRJkWkGKy5i/giphy.gif'),
  },
  name: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  terrain: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  groomed: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  status: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  waitTime: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  verticalFeet: {
    color: '#0062ff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
});

export default Display