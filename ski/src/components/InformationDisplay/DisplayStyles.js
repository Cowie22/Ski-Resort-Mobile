import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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