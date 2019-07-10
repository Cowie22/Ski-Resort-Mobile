import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, KeyboardAvoidingView, Animated } from 'react-native';
import styles from './FilterRunsStyles';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

class FilterRuns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      imageHeight: new Animated.Value(0)
    }
    this.handleChange = this.handleChange.bind(this);
  }
  keyboardWillShow() {
    Animated.timing(this.state.imageHeight, {
      toValue: 200,
      duration: duration,
    }).start();
  };
  keyboardWillHide() {
    Animated.timing(this.state.imageHeight, {
      toValue: 200,
      duration: duration,
    }).start();
  };
  handleChange(event) {
    console.log(event)
    this.setState({
      filterText: event,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.field}
        onChangeText={this.handleChange}
        value={this.state.filterText}
        editable={true}
        placeholder="Search Runs"
        placeholderTextColor={'rgba(255,255,255,0.3)'}
        />
      </View>
    );
  }
}


export default FilterRuns