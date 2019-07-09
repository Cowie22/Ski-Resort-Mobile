import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Animated } from 'react-native';
import axios from 'axios';
import NorthStar from './images/xlarge.jpg';
// import { Tabs } from './src/router';
import LiftIcon from './src/components/Icons/LiftIcon';
import MountPluto from './src/components/MapViews/MountPulto';
import Search from './src/components/SearchBar/Search';
import FilterRuns from './src/components/SearchBar/FilterRuns';
import Weather from './src/components/Weather/Weather';
import snowFall from './images/gifs/SnowFall.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      liftInfo: [],
      oneRunInfo: [],
      forecastData: [],
      show: false,
      mountainView: 0,
      currentRunID: 0,
      fadeAnim: new Animated.Value(0),
      temperature: 0,
      weatherCondition: null,
      humidity: 0,
      maxTemp: 0,
      minTemp: 0,
      windSpeed: 0,
      loading: true,
    }
    this.handleIcons = this.handleIcons.bind(this);
    this.handleRunSelection = this.handleRunSelection.bind(this);
    this.handleBaseState = this.handleBaseState.bind(this);
  }
  componentWillMount() {
    this.handleGetForecastData();
    this.handleGetWeatherData();
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
  handleGetWeatherData() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=39.2746&lon=-120.1211&APPID=cecb63c29bf8faa4dc6c39fe1c560182&units=imperial`)
      .then(res => {
        this.setState({
          temperature: res.data.main.temp,
          weatherCondition: res.data.weather[0].main,
          humidity: res.data.main.humidity,
          maxTemp: res.data.main.temp_max,
          minTemp: res.data.main.temp_min,
          windSpeed: res.data.wind.speed,
        })
      })
      .catch(err =>{
        console.log('ERROR', err)
      })
  }
  handleGetForecastData() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=39.2746&lon=-120.1211&APPID=cecb63c29bf8faa4dc6c39fe1c560182&units=imperial`)
      .then(res => {
        let forecastArray = [];
        for (let i = 3; i < 40; i += 8) {
          forecastArray.push(res.data.list[i])
        }
        this.setState({
          forecastData: forecastArray,
          loading: false,
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
    Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 1000,
      }, this.state.fadeAnim.setValue(0)).start();
  }
  render() {
    const { mountainView } = this.state;
    mountainView === 0 ? this.handleAnimation() : null;
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
    return (
      mountainView === 0 ?
      <ImageBackground source={snowFall} style={[styles.container]}>
        <Animated.ScrollView style={{color: '#fff', opacity: this.state.fadeAnim}}>
          <StatusBar barStyle="light-content" />
          <Image
            style={styles.nstar}
            source={{uri:'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1505722113/owvn5dbkxakklytxbwvd.png'}}
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
          {this.state.loading === false ?
          <Weather
            weatherCondition={this.state.weatherCondition}
            temperature={this.state.temperature}
            loading={this.state.loading}
            humidity={this.state.humidity}
            maxTemp={this.state.maxTemp}
            minTemp={this.state.minTemp}
            windSpeed={this.state.windSpeed}
            forecastData={this.state.forecastData}
            forecastView={this.state.forecastView}
          />
          : null
          }
          {/* <Tabs /> */}
        </Animated.ScrollView>
        </ImageBackground>
        :
        <MountPluto
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