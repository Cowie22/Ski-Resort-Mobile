import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  forecastContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 4,
  },
  dayContainer: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRightWidth: 1,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekday: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  btn: {
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold',
    letterSpacing: 1,
  }
});