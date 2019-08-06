import React from 'react';
import { StyleSheet, Text, Picker, View } from 'react-native';
import styles from './SearchStyles';
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
      // Dropdown in react native ahs a lot of specific styling that needs to be targeted directly
      // In order to make the UI look good for the user, hence the large dropdown
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
        // Ensures that the proper lift is displayed on icon click, because each lift has specific runs
        // Pertinent runs are grabbed from the database and we need to make sure that only the ones for
        // The current lift are displayed
        onChangeText={(value, index, data) => {
          this.props.handleIcons(index + 1)
        }}
      >
      </Dropdown>
    );
  }
}

export default Search