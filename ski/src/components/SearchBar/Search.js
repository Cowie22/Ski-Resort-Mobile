import React from 'react';
import { StyleSheet, Text, Picker, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lift: 'Cowie',
    }
  }
  updateLift(event) {
    this.setState({
      lift: event
    });
  }
  render() {
    return (
      <View>
        <Picker
        selectedValue={this.state.lift}
        onValueChange={this.updateLift}
        style={styles.dropdown}
        mode="dropdown"
        iosIcon={<Icon />}
        itemStyle={{color: 'blue', backgroundColor:'#fff'}}
        >
        <Picker.Item label = "Steve" value = "steve" />
        <Picker.Item label = "Ellen" value = "ellen" />
        <Picker.Item label = "Maria" value = "maria" />
      </Picker>
      <Text style={styles.text}>{this.state.lift}</Text>
    </View>
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
  dropdown: {
    height: 50,
    width: '100%',
    backgroundColor: 'red',
    color: '#747474',
    marginLeft: -8,
    marginTop: 2,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'blue'
 }
});

export default Search