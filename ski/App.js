import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Animated } from 'react-native';
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
import FilterRuns from './src/components/SearchBar/FilterRuns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      liftInfo: [],
      oneRunInfo: [],
      show: false,
      mountainView: 0,
      currentRunID: 0,
      fadeAnim: new Animated.Value(0),
    }
    this.handleIcons = this.handleIcons.bind(this);
    this.handleRunSelection = this.handleRunSelection.bind(this);
    this.handleBaseState = this.handleBaseState.bind(this);
  }
  componentDidMount() {
    this.getRuns();
    this.getLifts();
    // this.handleGetWeatherData();
  }
  // Handler so that display is recent on home button click
  handleBaseState() {
    this.setState({
      currentRunID: 0,
    })
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
        this.setState({
          liftInfo: res.data,
        });
      })
    }
    // Gets one run info depending on user click.  Used for Display.js
  handleRunSelection(id) {
    axios.get(`http://localhost:2228/run/${id}`)
    .then(res => {
      this.setState({
        oneRunInfo: res.data[0],
        currentRunID: id,
      })
    })
  }
  handleGetWeatherData() {
    axios.get(`https://www.metaweather.com/api/location/23511744/`)
      .then(res => {
        console.log('weather', res.data)
      })
  }
  // Handles the icons clicked, so that the proper Map View is displayed
  handleIcons(event) {
    this.setState({
      mountainView: event,
    }, () => console.log(this.state.mountainView))
  }
  handleAnimation() {
    Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 1000,
      }, this.state.fadeAnim.setValue(0)).start();
  }
  render() {
    const { mountainView } = this.state;
    mountainView === 0 ? this.handleAnimation() : this.handleAnimation();
    // All of the props shared amongst the conditional renders below
    const mountainViewProps = {
      handleIcons: this.handleIcons,
      mountainView: this.state.mountainView,
      runInfo: this.state.runInfo,
      handleRunSelection: this.handleRunSelection,
      oneRunInfo: this.state.oneRunInfo,
      handleBaseState: this.handleBaseState,
      currentRunID: this.state.currentRunID,
    }
    const skiContextValues = {
      skierStart: this.state.skierStart,
      skierMove: this.state.skierMove
    }
    return (
      mountainView === 0 ?
        <Animated.ScrollView style={{backgroundColor: 'black', color: '#fff', opacity: this.state.fadeAnim}}>
          <StatusBar barStyle="light-content" />
          <Image
            style={styles.nstar}
            source={{uri: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1505722113/owvn5dbkxakklytxbwvd.png'}}
          />
          <Search
            handleIcons={this.handleIcons}
            mountainView={this.state.mountainView}
            liftInfo={this.state.liftInfo}
          />
          <FilterRuns
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
          {...mountainViewProps}
        />
        : mountainView === 2 || mountainView === 3 ?
        <Backside
          {...mountainViewProps}
        />
        : mountainView === 4 || mountainView === 5 || mountainView === 6 || mountainView === 7 ?
        <Gondola
          {...mountainViewProps}
        />
        : mountainView === 8 || mountainView === 9 || mountainView === 10 || mountainView === 13 ?
        <MidMountain
          {...mountainViewProps}
        />
        :
        <Summit
          {...mountainViewProps}
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
    width: '90%',
    height: 120,
    marginTop: 28,
    marginLeft: 20,
    flex: 1,
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