import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginRight: 8,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tempText: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 22,
  },
  fieldContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
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