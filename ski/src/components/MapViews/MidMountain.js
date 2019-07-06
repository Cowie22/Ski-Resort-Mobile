import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MidMountainImg from '../../../images/MidMountain.jpg';
import RunSearch from '../SearchBar/RunSearch';
import FilterRuns from '../SearchBar/FilterRuns';
import Display from '../InformationDisplay/Display';

class MidMountain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    }
  }
  handleAnimation() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,             // Make it take a while
      }
    ).start();
  }
  render() {
    const { mountainView, handleIcons, handleBaseState } = this.props;
    mountainView === 8 || mountainView === 9 ||
    mountainView === 10 || mountainView === 13 ? this.handleAnimation() : null;
    return (
      <Animated.ScrollView minimumZoomScale={1} maximumZoomScale={5}
      style={{backgroundColor: 'black', color: '#fff', opacity: this.state.fadeAnim}}>
       <Image
          style={styles.nstar}
          source={{uri: 'https://easkiandsnowboard.com/assets/Uploads/_resampled/PadWyIzMDAiLCIyMDAiLCJGRkZGRkYiLDBd/LOGO-Northstar-USA.jpg'}}
        />
        <RunSearch
          handleIcons={this.props.handleIcons}
          mountainView={this.props.mountainView}
          runInfo={this.props.runInfo}
          handleRunSelection={this.props.handleRunSelection}
        />
        <FilterRuns
        
        />
        <Image
          style={styles.img}
          source={MidMountainImg}
        />
        <Display
          oneRunInfo={this.props.oneRunInfo}
          currentRunID={this.props.currentRunID}
        />
        <Button
          icon={
            <Icon
              name="home"
              size={48}
              color="white"
            />
          }
          buttonStyle={styles.btn}
          onPress={() => {
            handleIcons(0);
            handleBaseState();
          }}
          type="clear"
          TouchableOpacity={0.2}
        />
      </Animated.ScrollView>
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
  nstar: {
    width: '100%',
    height: 170,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 310,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'black',
    marginTop: 10,
  }
});

export default MidMountain