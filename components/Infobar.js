import React from 'react'; // 🎯 Burada useEffect/useState'e gerek yok, sildik!
import { StyleSheet, Text, View, Image } from 'react-native';

const Infobar = ({ weatherData }) => {
  const time = new Date();
  const currentHour = time.getHours();

  const windSpeed = weatherData?.hourly?.wind_speed_10m?.[currentHour] || "0";

  const humidity = weatherData?.hourly?.relative_humidity_2m?.[currentHour] || "0";

  return (
    <View style={styles.endiscontainer}>
      <View style={styles.infoBarContainer}>
        <View style={styles.infobardoublecont}>
          <Image
            source={require('../assets/noun-rain-2438520 1.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.text}>6%</Text>
        </View>
        <View style={styles.infobardoublecont}>
          <Image
            source={require('../assets/noun-humidity-151847 1.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.text}>{humidity}%</Text>
        </View>
        <View style={styles.infobardoublecont}>
          <Image
            source={require('../assets/noun-wind-4507827 1.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.text}>{windSpeed} km/h</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBarContainer: {
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  infoIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
  },
  infobardoublecont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  endiscontainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 15,
  }
});

export default Infobar;