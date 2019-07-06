import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, KeyboardAvoidingView, Animated } from 'react-native';
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
  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.state.imageHeight, {
      duration: event.duration,
      toValue: 200,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.state.imageHeight, {
      duration: event.duration,
      toValue: 200,
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
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
        <TextInput
        style={styles.field}
        onChangeText={this.handleChange}
        value={this.state.filterText}
        editable={true}
        placeholder="Search Runs"
        placeholderTextColor={'rgba(255,255,255,0.4)'}
        />
      </KeyboardAvoidingView>
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
  field: {
    height: 40,
    width: '100%',
    fontSize: 22,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
  },
});

export default FilterRuns