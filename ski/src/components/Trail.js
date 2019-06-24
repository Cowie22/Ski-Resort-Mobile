import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={style.trail}>THIS IS TRAIL</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  trail: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
    color: "#567823"
  },
});

export default Trail