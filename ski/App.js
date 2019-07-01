import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Animated } from 'react-native';
import axios from 'axios';
import NorthStar from './images/xlarge.jpg';
// import { Tabs } from './src/router';
import LiftIcon from './src/components/Icons/LiftIcon';
import Lookout from './src/components/MapViews/Lookout';
import Backside from './src/components/MapViews/Backside';
import Gondola from './src/components/MapViews/Gondola';
import MidMountain from './src/components/MapViews/MidMountain';
import Summit from './src/components/MapViews/Summit';
import Search from './src/components/SearchBar/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      liftInfo: [],
      show: false,
      mountainView: 0,
      fadeAnim: new Animated.Value(0),
    }
    this.handleIcons = this.handleIcons.bind(this);
  }
  componentDidMount() {
    this.getRuns();
    this.getLifts();
  }
  // Gets run data from the database, called in componentDidMount
  getRuns() {
    axios.get(`http://localhost:2228/run`)
      .then(res => {
        this.setState({
          runInfo: res.data,
        });
      })
  }
  // Gets lift data from the database, called in componentDidMount
  getLifts() {
    axios.get(`http://localhost:2228/lift`)
      .then(res => {
        console.log(res.data)
        this.setState({
          liftInfo: res.data,
        });
      })
  }
  // Handles the icons clicked, so that the proper Map View is displayed
  handleIcons(event) {
    this.setState({
      mountainView: event,
    }, () => console.log(this.state.mountainView))
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
        <Search
          handleIcons={this.handleIcons}
          mountainView={this.state.mountainView}
          liftInfo={this.state.liftInfo}
        />
        <ImageBackground
          style={styles.img}
          source={NorthStar}
        >
        <LiftIcon
          handleIcons={this.handleIcons}
        />
        </ImageBackground>
        {/* <Tabs /> */}
      </Animated.ScrollView>
      : mountainView === 1 ?
      <Lookout
        handleIcons={this.handleIcons}
        mountainView={this.state.mountainView}
      />
      : mountainView === 2 || mountainView === 3 ?
      <Backside
        handleIcons={this.handleIcons}
        mountainView={this.state.mountainView}
      />
      : mountainView === 4 || mountainView === 5 || mountainView === 6 || mountainView === 7 ?
      <Gondola
        handleIcons={this.handleIcons}
        mountainView={this.state.mountainView}
      />
      : mountainView === 8 || mountainView === 9 || mountainView === 10 || mountainView === 13 ?
      <MidMountain
        handleIcons={this.handleIcons}
        mountainView={this.state.mountainView}
      /> :
      <Summit
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