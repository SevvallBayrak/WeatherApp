import React, { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView, ActivityIndicator } from 'react-native';
import Header from './components/Header';
import Infobar from './components/Infobar';
import Today from './components/today';
import NextForecast from './components/NextForecast';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

const App = () => {

 const [data, setData] = useState(null);

async function getData() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    setData(result);
    console.log(result);
  } catch (error) {
    console.error(error?.message || error);
  }
}

useEffect(() => {
getData();
},[]);

if (data == null) {
    return (
        <ActivityIndicator/>
    )
}


    return(
<SafeAreaView style={styles.container}>
<LinearGradient
colors={['#011940', '#023d90', '#3568c7']}
style={StyleSheet.absoluteFill}
/>
<Header cityName="Berlin" /><ScrollView
showsVerticalScrollIndicator={false}
style={{ flex: 1 }}
>
<View style={styles.containers}>
<FastImage
source={require('./assets/Sun cloud angled rain.png')}
style={styles.rainImage}
/>
<Text style={styles.text}>{data.current.temperature_2m}°</Text>
<Text style={styles.text2}>Precipitations</Text>
<Text style={styles.text2}>Max 31° Min 25°</Text>
<Infobar weatherData={data} />
<Today weatherData={data} />
<NextForecast weatherData={data} /></View>
</ScrollView>

</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
//backgroundColor: '#0A3570',
},
rainImage: {
width: 200,
aspectRatio: 1,
//backgroundColor: 'red',
},
containers: {
flex: 1,
alignItems: 'center',
paddingBottom: 30,
},
text: {
fontSize : 60,
color : '#fff',
marginTop: -40,
marginLeft: 15,
textAlign : 'center',
fontWeight: '600',
},
text2: {
color: '#fff',
textAlign: 'center',
}
});

export default App;