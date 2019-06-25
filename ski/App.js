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

const MAPPING = [
  {
    id: '0',
    name: 'First Area Name',
    shape: 'rectangle',
    width: 30,
    height: 40,
    x1: 80,
    y1: 500,
    prefill: 'blue',
    fill: 'blue'
  },
  {
    id: '1',
    name: 'Second Area Name',
    shape: 'rectangle',
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
      show: false,
    }
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
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>N-Star</Text>
        {/* <MapView style={styles.container}>
        <Image
          source={NorthStar}
          style={{ width: 374, height: 320 }}
        />
        </MapView> */}
        <ImageMapper
          imgHeight={400}
          imgWidth={380}
          imgSource={NorthStar}
          imgMap={MAPPING}
          // onPress={(item, idx, event) => this.onAnyAreaPress(item, idx, event)}
          containerStyle={styles.container}
          // selectedAreaId="my_area_id"
        />
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