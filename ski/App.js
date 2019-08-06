import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Animated } from 'react-native';
import axios from 'axios';
import NorthStar from './images/xlarge.jpg';
// import { Tabs } from './src/router';
import styles from './AppStyles';
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
      onePlaceInfo: [],
      currentRunID: 0,
      currentPlaceID: 0,
      mountainView: 0,
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
    this.handleGetOnePlace = this.handleGetOnePlace.bind(this);
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
      currentPlaceID: 0,
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
      .catch(err =>{
        console.log('ERROR', err)
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
      .catch(err =>{
        console.log('ERROR', err)
      })
    }
    // Gets one run info depending on user click.  Used for Display.js
    // Setting the current place state to 0, ensures that the animation on the child works
    // Properly and more importantly the proper information is displayed
    // The same logic is used below in handleGetOnePlace
  handleRunSelection(id) {
    axios.get(`http://localhost:2228/run/${id}`)
    .then(res => {
      this.setState({
        oneRunInfo: res.data[0],
        currentRunID: id,
        currentPlaceID: 0,
      })
    })
    .catch(err =>{
      console.log('ERROR', err)
    })
  }
  handleGetOnePlace(id) {
    axios.get(`http://localhost:2228/place/${id}`)
    .then(res => {
      console.log(res.data[0])
      this.setState({
        onePlaceInfo: res.data[0],
        currentPlaceID: id,
        currentRunID: 0,
      })
    })
    .catch(err =>{
      console.log('ERROR', err)
    })
  }
  // Easier to parse the data this way from the weather api and to have a dynamically rendered weather portion
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
          loading: false,
        })
      })
      .catch(err =>{
        console.log('ERROR', err)
      })
  }
  // Different request for forecast and one days weather from the API
  handleGetForecastData() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=39.2746&lon=-120.1211&APPID=cecb63c29bf8faa4dc6c39fe1c560182&units=imperial`)
    .then(res => {
      let forecastArray = [];
      // This conditional ensures that the weather forecast always gets data from the same time of day
      // The data is given in three hour chunks over 5 days, so the index corresponding to time of day
      // is always changing
        for (let i = 0; i < 40; i++) {
          if (res.data.list[i].dt_txt.includes('18:00:00')) {
            forecastArray.push(res.data.list[i])
          }
        }
        this.setState({
          forecastData: forecastArray,
        })
      })
      .catch(err =>{
        console.log('ERROR', err)
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
    const { runInfo,
      liftInfo,
      oneRunInfo,
      forecastData,
      onePlaceInfo,
      currentRunID,
      currentPlaceID,
      mountainView,
      fadeAnim,
      temperature,
      weatherCondition,
      humidity,
      maxTemp,
      minTemp,
      windSpeed,
      loading } = this.state;

      // Animates a fade when the app initially renders and when the home page is returned to
    mountainView === 0 ? this.handleAnimation() : null;
    // All of the props shared amongst the conditional renders below
    const mountainViewProps = {
      handleIcons: this.handleIcons,
      mountainView: mountainView,
      runInfo: runInfo,
      handleRunSelection: this.handleRunSelection,
      oneRunInfo: oneRunInfo,
      currentRunID: currentRunID,
      handleGetOnePlace: this.handleGetOnePlace,
      onePlaceInfo: onePlaceInfo,
      currentPlaceID: currentPlaceID,
      handleBaseState: this.handleBaseState,
    }
    return (
      // Conditional needed for rendering because the weather data can take some time to get
      // On occasion it would crash the app because the data was not available for the weather component
      mountainView === 0 && forecastData.length > 0 ?
      <ImageBackground source={snowFall} style={[styles.container]}>
        <Animated.ScrollView style={{color: '#fff', opacity: fadeAnim}}>
          <StatusBar barStyle="light-content" />
          <Image
            style={styles.nstar}
            source={{uri:'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1505722113/owvn5dbkxakklytxbwvd.png'}}
          />
          <Search
            handleIcons={this.handleIcons}
            mountainView={mountainView}
            liftInfo={liftInfo}
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
          {loading === false ?
          <Weather
            weatherCondition={weatherCondition}
            temperature={temperature}
            loading={loading}
            humidity={humidity}
            maxTemp={maxTemp}
            minTemp={minTemp}
            windSpeed={windSpeed}
            forecastData={forecastData}
          />
          : null
          }
          {/* <Tabs /> */}
        </Animated.ScrollView>
        </ImageBackground>
        : mountainView > 0 && forecastData.length > 0 ?
        <MountPluto
          {...mountainViewProps}
        />
        :
        <View>
          <Text>LOADING WEATHER DATA</Text>
        </View>
    );
  }
}


export default App