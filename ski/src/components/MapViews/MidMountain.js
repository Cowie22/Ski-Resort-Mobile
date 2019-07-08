import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Animated, StatusBar } from 'react-native';
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
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  render() {
    const { mountainView, handleIcons, handleBaseState } = this.props;
    mountainView === 8 || mountainView === 9 ||
    mountainView === 10 || mountainView === 13 ? this.handleAnimation() : null;
    return (
      <Animated.ScrollView minimumZoomScale={1} maximumZoomScale={5}
      style={{backgroundColor: 'black', color: '#fff', opacity: this.state.fadeAnim}}>
      <StatusBar barStyle="light-content" />
       <Image
          style={styles.nstar}
          source={{uri: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1505722113/owvn5dbkxakklytxbwvd.png'}}
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
    width: '90%',
    height: 120,
    marginTop: 28,
    marginLeft: 20,
    flex: 1,
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