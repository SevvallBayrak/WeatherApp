import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ cityName }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.locationBox}>
        <Image
          source={require('../assets/map.png')}
          style={styles.iconImage}
        />
        <Text style={styles.cityName}>{cityName}</Text>
        <Text style={styles.dropdownText}>▾</Text>
      </View>

      <View style={styles.notificationBox}>
        <Image
          source={require('../assets/Group 652.png')}
          style={styles.iconImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    width: '100%',
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  notificationBox: {
    position: 'relative',
    padding: 5,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  }
});

export default Header;