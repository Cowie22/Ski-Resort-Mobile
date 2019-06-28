import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Animated } from 'react-native';
import axios from 'axios';
import NorthStar from './images/xlarge.jpg';
import { Tabs } from './src/router';
import Lookout from './src/components/Lookout';
import LiftIcon from './src/components/LiftIcon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      show: false,
      mountainView: 0,
      fadeAnim: new Animated.Value(0),
    }
    this.handleIcons = this.handleIcons.bind(this);
  }
  componentDidMount() {
    this.getRuns();
  }
  getRuns() {
    axios.get(`http://localhost:2228/run`)
      .then(res => {
        this.setState({
          runInfo: res.data,
        });
      })
  }
  handleIcons(event) {
    this.setState({
      mountainView: event,
    }, () => {
      if (this.state.mountainView === 0) {
        this.handleAnimation();
      }
    })
  }
  handleAnimation() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();
  }
  render() {
    const { mountainView } = this.state;
    mountainView === 0 ? this.handleAnimation() : null;
    return (
      mountainView === 0 ?
      <Animated.ScrollView style={{backgroundColor: 'black', color: '#fff', opacity: this.state.fadeAnim}}>
        <Image
          style={styles.nstar}
          source={{uri: 'https://easkiandsnowboard.com/assets/Uploads/_resampled/PadWyIzMDAiLCIyMDAiLCJGRkZGRkYiLDBd/LOGO-Northstar-USA.jpg'}}
        />
        <ImageBackground
          style={styles.img}
          source={NorthStar}
        >
        <LiftIcon
          handleIcons={this.handleIcons}
        />
        </ImageBackground>
        <Tabs />
      </Animated.ScrollView>
      :
      <Lookout
        handleIcons={this.handleIcons}
        mountainView={this.state.mountainView}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
    color: "#1E90FF",
  },
  nstar: {
    width: '100%',
    height: 170,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute'
  },
  img: {
    width: 380,
    height: 350,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default App