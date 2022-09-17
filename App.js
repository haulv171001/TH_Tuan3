import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity , Button } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
        
          <TouchableOpacity style={styles.circle}>
          
         </TouchableOpacity>
        
    
       
        <Text style={styles.paragraph}>GROW</Text>
        <Text style={[styles.paragraph,{paddingBottom:55}]}>YOUR BUSINESS</Text>
    
       <View style={styles.container}>
          <Text style={{fontSize:15,textAlign:'center',fontFamily:'Roboto',fontStyle:'normal',color:'#000000',lineHeight:18,fontWeight:700}}>We will help you to grow your business using online server</Text>
      </View>
      <View style={[styles.boxbutton]}>
      <View style={[styles.button]}>
          <Button title="LOGIN" color='#E3C000' fontFamily=''></Button>
      </View>
      <View style={[styles.button]}>
          <Button title="SIGN IN" color='#E3C000'></Button>
      </View>
      </View>   
       <View style={styles.container}>
        <Text style={styles.paragraph}>We HOME WORK?</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28F7AC',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    margin : 66,
    backgroundColor: '#28F7AC',
    alignSelf:'center',
    borderWidth: 15,
    borderRadius: (142/2),
    width: 142,
    height: 142,
  },
  boxbutton :{
      flexDirection:'row',
      justifyContent : 'space-around',
  },
  button : {
    width : 125,
    height : 45,  
  }
});
