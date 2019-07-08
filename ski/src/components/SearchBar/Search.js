import React from 'react';
import { StyleSheet, Text, Picker, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let data = [];
    this.props.liftInfo.map((lift, i) => {
      let liftObj = {
        value: lift.name,
      }
      data.push(liftObj)
    })
    return (
      <Dropdown
        label='CHAIR LIFTS'
        data={data}
        labelPadding={400}
        fontSize={20}
        labelFontSize={20}
        animationDuration={200}
        labelTextStyle={{fontFamily: 'Verdana', fontWeight: 'bold', marginLeft: 20}}
        itemTextStyle={{fontFamily: 'Verdana', fontWeight: 'bold', marginLeft: 20}}
        baseColor='rgb(125, 24, 24)'
        itemColor='rgb(125, 24, 24)'
        selectedItemColor='rgb(125, 24, 24)'
        shadeOpacity={0.12}
        rippleOpacity={0.52}
        containerStyle={styles.dropdown}
        pickerStyle={styles.dropList}
        onChangeText={(value, index, data) => {
          this.props.handleIcons(index + 1)
        }}
      >
      </Dropdown>
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
    marginTop: -40,
  },
  dropList: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'blue'
 }
});

export default Search