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
import FilterRuns from './src/components/SearchBar/FilterRuns';
import SkiContext from './src/Context/SkiContext';

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
      skierStart: new Animated.ValueXY({ x: 50, y: -310 }),
      skierMove: (currentX, currentY) => {
        Animated.loop(
          Animated.timing(this.state.skierStart, {
            toValue: {x: currentX, y: currentY},
            duration: 3000,
          }),
          {
            iterations: 4
          }
        ).start()
      },
    }
    this.handleIcons = this.handleIcons.bind(this);
    this.handleRunSelection = this.handleRunSelection.bind(this);
    this.handleBaseState = this.handleBaseState.bind(this);
  }
  componentDidMount() {
    this.getRuns();
    this.getLifts();
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
      <SkiContext.Provider value={skiContextValues}>
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
      </SkiContext.Provider>
      : mountainView === 1 ?
      <SkiContext.Provider value={skiContextValues}>
        <Lookout
          {...mountainViewProps}
        />
      </SkiContext.Provider>
      : mountainView === 2 || mountainView === 3 ?
      <SkiContext.Provider value={skiContextValues}>
        <Backside
          {...mountainViewProps}
        />
      </SkiContext.Provider>
      : mountainView === 4 || mountainView === 5 || mountainView === 6 || mountainView === 7 ?
      <SkiContext.Provider value={skiContextValues}>
        <Gondola
          {...mountainViewProps}
        />
      </SkiContext.Provider>
      : mountainView === 8 || mountainView === 9 || mountainView === 10 || mountainView === 13 ?
      <SkiContext.Provider value={skiContextValues}>
        <MidMountain
          {...mountainViewProps}
        />
      </SkiContext.Provider>
      :
      <SkiContext.Provider value={skiContextValues}>
        <Summit
          {...mountainViewProps}
        />
      </SkiContext.Provider>
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