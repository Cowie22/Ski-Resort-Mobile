import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';
import Ski from './src/components/Ski';
import Trail from './src/components/Trail';
import NorthStar from './images/xlarge.jpg';
import { Tabs } from './src/router';
import { Overlay } from 'react-native-elements';
import ImageMapper from 'react-native-image-mapper';
import MAPPING from './src/components/ChairMarker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      show: false,
    }
    this.onAnyAreaPress = this.onAnyAreaPress.bind(this);
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
  onAnyAreaPress(item, idx, event) {
    console.log('hello')
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <Text style={styles.title}>N-Star</Text>
        <ImageMapper
          imgHeight={350}
          imgWidth={380}
          imgSource={NorthStar}
          // Points come from ChairMarker.js in order to reduce code in App.js
          imgMap={MAPPING}
          onPress={(item, idx, event) => this.onAnyAreaPress(item, idx, event)}
          containerStyle={styles.container}
        >
        </ImageMapper>
        <Tabs />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
    color: "#1E90FF"
  },
});



export default App