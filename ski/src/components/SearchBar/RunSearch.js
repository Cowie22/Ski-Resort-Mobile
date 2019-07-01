import React from 'react';
import { StyleSheet, Text, Picker, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

class RunSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { mountainView, runInfo } = this.props;
    let data = [];
    mountainView === 1 ?
    runInfo.map((run, i) => {
      if (run.lift_id === 1) {
        let runObj = {
          value: run.name,
        }
        data.push(runObj)
      }
    })
    :
    mountainView === 2 || mountainView === 3 ?
    runInfo.map((run, i) => {
      if (run.lift_id === 2 || run.lift_id === 3) {
        let runObj = {
          value: run.name,
        }
        data.push(runObj)
      }
    })
    :
    null
    return (
      <Dropdown
        label='RUNS'
        data={data}
        labelPadding={400}
        fontSize={20}
        labelFontSize={20}
        animationDuration={200}
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
    marginTop: -20,
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

export default RunSearch