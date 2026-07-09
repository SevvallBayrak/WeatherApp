import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const Infobar = () => {
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
<Text style={styles.text}>90%</Text>
</View>

<View style={styles.infobardoublecont}>
  <Image
source={require('../assets/noun-wind-4507827 1.png')}
style={styles.infoIcon}
/>
<Text style={styles.text}>19km/h</Text>
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
text:{
color: '#fff',
//textAlign: 'center',
},
infobardoublecont:{
  flexDirection: 'row',
},
endiscontainer:{
  width: '100%',
  paddingHorizontal:30,
  marginTop: 15,
  //backgroundColor: 'red',
}
})

export default Infobar