import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './RunSearchStyles';
import { Dropdown } from 'react-native-material-dropdown';

const getLiftRuns = (runInfoProps, liftID) => {
  let info = [];
  runInfoProps.map((run, i) => {
    if (run.lift_id === liftID) {
      let runObj = {
        value: run.name,
        runID: run.id,
      }
      info.push(runObj);
    }
  })
  return info;
}
class RunSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const { mountainView, runInfo } = this.props;
    let data = [];
    mountainView === 1 ? (data = getLiftRuns(runInfo, 1), liftName = 'Lookout Express') :
    mountainView === 2 ? (data = getLiftRuns(runInfo, 3), liftName = 'Promised Land Express') :
    mountainView === 3 ? (data = getLiftRuns(runInfo, 2), liftName = 'Backside Express') :
    mountainView === 4 ? (data = getLiftRuns(runInfo, 4), liftName = 'Timberline') :
    mountainView === 5 ? (data = getLiftRuns(runInfo, 5), liftName = 'Highlands Gondola') :
    mountainView === 6 ? (data = getLiftRuns(runInfo, 6), liftName = 'Big Springs Gondola') :
    mountainView === 7 ? (data = getLiftRuns(runInfo, 7), liftName = 'Village Express') :
    mountainView === 8 ? (data = getLiftRuns(runInfo, 8), liftName = 'Tahoe Zephyr Express') :
    mountainView === 9 ? (data = getLiftRuns(runInfo, 9), liftName = 'Arrow Express') :
    mountainView === 10 ? (data = getLiftRuns(runInfo, 10), liftName = 'Vista Express') :
    mountainView === 11 ? (data = getLiftRuns(runInfo, 11), liftName = 'Rendezvous Express') :
    mountainView === 12 ? (data = getLiftRuns(runInfo, 12), liftName = 'Comstock Express') :
    mountainView === 13 ? (data = getLiftRuns(runInfo, 13), liftName = 'The Big Easy') :
    null
    return (
      <Dropdown
        label={`${liftName} Runs`}
        data={data}
        labelPadding={400}
        fontSize={20}
        labelFontSize={20}
        animationDuration={200}
        baseColor='rgb(125, 24, 24)'
        itemColor='rgb(125, 24, 24)'
        selectedItemColor='rgb(125, 24, 24)'
        textColor='rgb(125, 24, 24)'
        shadeOpacity={0.12}
        rippleOpacity={0.52}
        labelTextStyle={{fontFamily: 'Verdana', fontWeight: 'bold', marginLeft: 20}}
        itemTextStyle={{fontFamily: 'Verdana', fontWeight: 'bold', marginLeft: 20}}
        containerStyle={styles.dropdown}
        pickerStyle={styles.dropList}
        onChangeText={(value, index, data) => {
          let currentRunID = 0;
          data.filter((run, i) => {
            if (run.value === value) {
              currentRunID = run.runID
            }
          })
          this.props.handleRunSelection(currentRunID);
        }}
      >
      </Dropdown>
    );
  }
}


export default RunSearch