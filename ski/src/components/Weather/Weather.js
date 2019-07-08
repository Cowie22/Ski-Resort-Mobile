import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { temperature, weatherCondition } = this.props;
    return (
      <View style={styles.weatherContainer}>
        <View style={styles.headerContainer}>
          <Icon size={48} name="sun-o" color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚F</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherCondition}</Text>
          <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
      </View>
    )
  }
}
//cecb63c29bf8faa4dc6c39fe1c560182
//8ef1f55ff407708df4aeed5cb33dfadd
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});


export default Weather