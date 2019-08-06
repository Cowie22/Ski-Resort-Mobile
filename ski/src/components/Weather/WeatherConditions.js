// This entire file is meant so that the weather is dynamically rendered.  The color of the day's weather background
// And the icon change accordingly

export const weatherType = {
  Rain: {
    color: 'rgba(0, 91, 234, 0.8)',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy'
  },
  Clear: {
    color: 'rgba(247, 183,	51, 0.8)',
    title: 'Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    color: 'rgba(97, 97, 97, 0.8)',
    title: 'Thunder/Lighting',
    subtitle: 'Because Gods are angry',
    icon: 'weather-lightning'
  },
  Clouds: {
    color: 'rgba(194, 191, 186, 0.8)',
    title: 'Cloudy',
    subtitle: 'Everywhere',
    icon: 'weather-cloudy'
  },
  Snow: {
    color: 'rgba(0, 210, 255, 0.8)',
    title: 'Snowing',
    subtitle: 'Get out and build a snowman for me',
    icon: 'weather-snowy'
  },
  Drizzle: {
    color: 'rgba(7, 101, 133, 0.8)',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail'
  },
  Haze: {
    color: 'rgba(102, 166, 255, 0.8)',
    title: 'Hazy',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail'
  },
  Mist: {
    color: 'rgba(60, 211, 173, 0.8)',
    title: 'Misty',
    subtitle: "Don't roam in forests!",
    icon: 'weather-fog'
  }
};