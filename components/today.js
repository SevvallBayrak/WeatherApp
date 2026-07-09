import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Today = ({ weatherData }) => {
  const currentHour = new Date().getHours();
  const currentDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date());
  const times = weatherData?.hourly?.time || [];
  const temperatures = weatherData?.hourly?.temperature_2m || [];

  const hourlyData = [0, 1, 2, 3, 4, 5, 6].map((index) => {
    const fullTime = times[index] || "";
    
    const formattedTime = fullTime.split("T")[1] || "00:00"; 
  
    const hourNumber = parseInt(formattedTime.split(":")[0]);

    return {
      id: index.toString(),
      degree: `${temperatures[index] || 0}°C`,
      image: index % 2 === 0 ? require('../assets/Group 650.png') : require('../assets/Group 647.png'),
      time: formattedTime,
      hourNumber: hourNumber
    };
  });

  return (
    <View style={styles.maincontainer}>
      <View style= {styles.titleRow}>
        <Text style={styles.texttoday}>today</Text>
        <Text style={styles.text}>{currentDate}</Text>
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