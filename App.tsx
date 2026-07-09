import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import Infobar from './components/Infobar';
import Today from './components/today';
import NextForecast from './components/NextForecast';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

const App = () => {
return (
<SafeAreaView style={styles.container}>
<LinearGradient
colors={['#052354', '#0c489c', '#1548a5']}
style={StyleSheet.absoluteFill}
/>
<Header />
<ScrollView
showsVerticalScrollIndicator={false}
style={{ flex: 1 }}
>
<View style={styles.containers}>
<FastImage
source={require('./assets/Sun cloud angled rain.png')}
style={styles.rainImage}
resizeMode={FastImage.resizeMode.contain}
/>
<Text style={styles.text}>28°</Text>
<Text style={styles.text2}>Precipitations</Text>
<Text style={styles.text2}>Max 31° Min 25°</Text>
<Infobar/>
<Today />
<NextForecast/>
</View>
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
width: 750,
aspectRatio: 2.5,
marginTop: -50,
},
containers: {
flex: 1,
alignItems: 'center',
//marginTop: -5,
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