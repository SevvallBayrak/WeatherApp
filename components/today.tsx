import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Today = () => {
  const currentHour = new Date().getHours();

  const hourlyData = [
    { id: '0', degree: '30°C', image: require('../assets/Group 650.png'), time: '12.00', hourNumber: 12 },
    { id: '5', degree: '25°C', image: require('../assets/Group 647.png'), time: '13.00', hourNumber: 13 },
    { id: '6', degree: '27°C', image: require('../assets/Group 647.png'), time: '14.00', hourNumber: 14 },
    { id: '1', degree: '29°C', image: require('../assets/Group 650.png'), time: '15.00', hourNumber: 15 },
    { id: '2', degree: '26°C', image: require('../assets/Group 650.png'), time: '16.00', hourNumber: 16 },
    { id: '3', degree: '24°C', image: require('../assets/Group 647.png'), time: '17.00', hourNumber: 17 },
    { id: '4', degree: '23°C', image: require('../assets/Group 655.png'), time: '18.00', hourNumber: 18 },
  ];

  return (
    <View style={styles.maincontainer}>
      <View style= {styles.titleRow}>
        <Text style={styles.texttoday}>today</Text>
        <Text style={styles.text}>Mar,9</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollWrapper}
        contentContainerStyle={styles.scrollContent}
      >
        {hourlyData.map((item) => {
          const isActive = currentHour === item.hourNumber;

          return (

            <View 
              key={item.id} 
              style={[
                styles.miniColumn, 
                isActive && { 
                  borderWidth: 2, 
                  borderColor: 'rgba(154, 154, 231, 0.4)', 
                  borderRadius: 15,
                  paddingHorizontal: 2
                }
              ]}
            >
              <Text style={styles.textderece}>{item.degree}</Text>
              <Image source={item.image} style={styles.iconImage} />
              <Text style={styles.textTime}>{item.time}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer:{
    width: 350,
    height: 250,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  texttoday:{
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  scrollWrapper: {
    width: '100%',
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  miniColumn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textderece: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
  iconImage:{
    width: 110,
    height: 60,
  },
  textTime: {
    color: '#B2C4DF',
    fontSize: 14,
    marginTop: 5,
  }
})

export default Today