import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const NextForecast = () => {
return (
<View style={styles.wrappercont}>
<View style={styles.Container}>
<View style={styles.headercont}>
<Text style={styles.textheader}>Next Forecast</Text>
<Image
source ={require ('../assets/calendar.png')}
/>
</View>
<View style={styles.mondaycont}>
<Text style={styles.text}>Monday</Text>
<Image
source ={require ('../assets/Big rain drops.png')}
/>
<View style={styles.derececont}>
<Text style={styles.text}>13°C</Text>
<Text style={styles.textsoluk}> 10°C</Text>
</View>
</View>
<View style={styles.mondaycont}>
<Text style={styles.text}>Tuesday</Text>
<Image
source ={require ('../assets/Cloud 3 zap.png')}
/>
<View style={styles.derececont}>
<Text style={styles.text}>17°C</Text>
<Text style={styles.textsoluk}> 12°C</Text>
</View>
</View>
</View>
</View>

)
}

export default NextForecast

const styles = StyleSheet.create({
Container: {
height: 200,
marginTop: 20,
backgroundColor: 'rgba(255, 255, 255, 0.1)',
borderRadius: 20,
alignItems: 'center',
},
textheader:{
color: '#fff',
fontSize: 25,
fontWeight: '500',
},
headercont:{
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
width: '100%',
marginBottom: 10,
marginTop: 10,
paddingHorizontal: 15,
},
mondaycont:{
  marginTop: 5,
flexDirection: 'row',
alignItems: 'center',
gap: 65,
},
text:{
color: '#fff',
fontSize: 15,
fontWeight: '600',
},
textsoluk:{
color: '#c7c0c03e',
fontSize: 15,
},
wrappercont:{
  width: '100%',
  alignItems: 'center',
  paddingHorizontal: 30,
},
derececont:{
  flexDirection: 'row',
}
})