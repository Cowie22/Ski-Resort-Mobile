import React from 'react';
import {StyleSheet, Text, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStart: new Animated.ValueXY({x: 0, y: 200}),
    }
    this.handleAnimation = this.handleAnimation.bind(this);
  }
  handleAnimation() {
    Animated.timing(this.state.displayStart, {
      toValue: {x: 0, y: 0},
      duration: 700,
    }, this.state.displayStart.setValue({x: 0, y: 200})).start();
  }
  render() {
    const { name, groomed, wait_time, vertical_feet, terrain, status, is_favorite, to_complete, id } = this.props.oneRunInfo;

    const { onePlaceInfo } = this.props;

    const terrainIcon = terrain === 'Black Diamond: Most Difficult' ?
    <Icon name="cards-diamond" size={28} color="#000000" /> :
    terrain === 'Blue Square: More Difficult' ?
    <Icon name="square" size={28} color="#003b99" /> :
    terrain === 'Green Circle: Easiest Way Down' ?
    <Icon name="checkbox-blank-circle" size={28} color="#008702" /> :
    <Icon2 name="snowboarding" size={28} color="#ff6200" />;

    const groomerIcon = <Icon2 name="snowplow" size={20} color={groomed === 1 ? "#008702" : "rgb(125, 24, 24)"} />;

    const statusIcon = status === 1 ? <Icon2 name="thumbs-up" size={20} color="#008702" /> :
    <Icon2 name="thumbs-down" size={20} color="rgb(125, 24, 24)" />;

    const openPlaceIcon = <Icon2 name="thumbs-up" size={20} color="#008702" />;
    const closedPlaceIcon = <Icon2 name="thumbs-down" size={20} color="rgb(125, 24, 24)" />;

    const clockIcon = <Icon name="clock" size={20} color="#000000" />;

    const mountainIcon = <Icon2 name="mountain" size={20} color="#000000" />;

    const beerIcon = <Icon3 name="md-beer" size={28} color="#fff" />

    const restroomIcon = <Icon2 name="restroom" size={28} color="#fff" />

    this.props.currentRunID > 0 || this.props.currentPlaceID ? this.handleAnimation() : null;
    return (
      this.props.currentRunID > 0 && this.props.currentPlaceID === 0 ?
      <Animated.View style={[this.state.displayStart.getLayout(), styles.animated, styles.container]}>
        <Text style={[styles.title]}>{name}</Text>
        <Text
        style={terrain === 'Black Diamond: Most Difficult' ? [styles.text, styles.blackDiamond] :
        terrain === 'Blue Square: More Difficult' ? [styles.text, styles.blueSquare] :
        terrain === 'Green Circle: Easiest Way Down' ? [styles.text, styles.greenCircle] :
        [styles.text, styles.terrainPark]}>{terrainIcon}{terrain}
        </Text>
        <Text style={groomed === 1 ? [styles.text, styles.goodToGo] :
        [styles.text, styles.moreDangerous]}>{groomerIcon}{'  '}{groomed === 1 ? 'Groomed' : 'Not Groomed'}
        </Text>
        <Text style={status === 1 ? [styles.text, styles.goodToGo] :
        [styles.text, styles.moreDangerous]}>{statusIcon}{'  '}{status === 1 ? 'OPEN' : 'CLOSED'}</Text>
        <Text style={[styles.text]}>{clockIcon} WAIT TIME: {wait_time}</Text>
        <Text style={[styles.text]}>{mountainIcon}{'  '}{vertical_feet} Vertical Feet!</Text>
      </Animated.View>
      : this.props.currentRunID === 0 && this.props.currentPlaceID > 0 ?
      <Animated.View style={[this.state.displayStart.getLayout(), styles.animated, styles.container]}>
        <Text style={[styles.title]}>{onePlaceInfo.name}</Text>
        <View style={styles.descriptionIconContainer}>
          <Text style={{marginRight: 4}}>{beerIcon}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.description]}>{onePlaceInfo.description}</Text>
          </View>
          <Text style={{marginLeft: 4}}>{restroomIcon}</Text>
        </View>
        <View style={styles.placeStatusContainer}>
          <Text style={[styles.open]}>{openPlaceIcon}{'  '}{onePlaceInfo.open_time.slice(1, 5)} A.M.</Text>
          <Text style={[styles.close]}>{closedPlaceIcon}{'  '}{onePlaceInfo.close_time.slice(1, 5)} P.M.</Text>
        </View>
      </Animated.View>
      :
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold',
    height: 160,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 120,
  },
  animated: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'rgb(125, 24, 24)',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#ffb300',
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold'
  },
  blackDiamond: {
    color: '#000000',
  },
  blueSquare: {
    color: '#003b99',
  },
  greenCircle: {
    color: '#008702',
  },
  terrainPark: {
    color: '#ff6200',
  },
  goodToGo: {
    color: '#008702',
  },
  moreDangerous: {
    color: 'rgb(125, 24, 24)',
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  descriptionIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  description: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 4,
  },
  placeStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  open: {
    color: '#008702',
    fontFamily: 'Verdana',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  close: {
    color: 'rgb(125, 24, 24)',
    fontFamily: 'Verdana',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Display