import React from 'react';
import { Animated } from 'react-native';

const SkiContext = React.createContext({
  skierStart: new Animated.ValueXY({ x: 50, y: -310 }),
  skierMove: () => {
    Animated.loop(
      Animated.timing({ x: 50, y: -310 }, {
        toValue: {x: 200, y: -200},
        duration: 3000,
      }), {
        iterations: 4
      }
    ).start()
  }
});

export default SkiContext;