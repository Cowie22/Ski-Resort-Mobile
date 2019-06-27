import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
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
    }
    this.handleIconPress = this.handleIconPress.bind(this);
    this.handleHomeButton = this.handleHomeButton.bind(this);
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
  handleIconPress(event) {
    console.log(event)
    this.setState({
      mountainView: event,
    }, () => console.log(this.state.mountainView))
  }
  handleHomeButton(event) {
    this.setState({
      mountainView: event,
    })
  }
  render() {
    const { mountainView } = this.state;
    return (
      mountainView === 0 ?
      <ScrollView style={{backgroundColor: 'black', color: '#fff'}}>
        <Image
          style={styles.nstar}
          source={{uri: 'https://easkiandsnowboard.com/assets/Uploads/_resampled/PadWyIzMDAiLCIyMDAiLCJGRkZGRkYiLDBd/LOGO-Northstar-USA.jpg'}}
        />
        <ImageBackground
          style={styles.img}
          source={NorthStar}
        >
        <LiftIcon
          handleIconPress={this.handleIconPress}
        />
        </ImageBackground>
        <Tabs />
      </ScrollView>
      :
      <Lookout
        handleHomeButton={this.handleHomeButton}
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