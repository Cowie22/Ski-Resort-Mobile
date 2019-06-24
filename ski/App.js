import React from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Ski from './src/components/Ski';
import Trail from './src/components/Trail'
import { Tabs } from './src/router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runInfo: [],
    }
  }
  componentDidMount() {
    this.getRuns();
  }
  getRuns() {
    axios.get(`http://localhost:2228/run`)
      .then(res => {
        console.log('res', res)
        this.setState({
          runInfo: res.data,
        });
      })
  }
  render() {
    console.log('info', this.state.runInfo)
    return (
      <ScrollView>
        <Text style={styles.title}>N-Star</Text>
        <Ski name="Cow" />
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