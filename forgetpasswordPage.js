import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import imgLock from '../assets/lock.JPG';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={imgLock} style={styles.imageLock}></Image>
      <Text
        style={{
          fontFamily: 'Rotobo',
          fontSize: 25,
          lineHeight: 29.3,
          textAlign: 'center',
          fontStyle: 'normal',
          color: '#000000',
          fontWeight: 700,
          margin: 32,
        }}>
        FORGET{'\n'}PASSWORD
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Rotobo',
          fontSize: 15,
          lineHeight: 18,
          fontStyle: 'normal',
          color: '#000000',
          marginBottom: 10,
          fontWeight: 700,
        }}>
        Provide your account’s email for which you{'\n'}want to reset your
        password
      </Text>
      <View style={styles.input}>
        <View
          style={{
            width: 48,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/icons8-mail-15.png')}></Image>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', textAlign: 'flex-end' }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              lineHeight: 18,
              color: 'black',
              fontWeight: 400,
            }}>
            Email
          </Text>
        </View>
      </View>
      <View style={styles.buttonNext}>
        <View
          style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              lineHeight: 18,
              color: 'black',
              fontWeight: 700,
            }}>
            NEXT
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDF6C6',
  },
  imageLock: {
    margin: 33,
    width: 105,
    height: 117,
  },
  input: {
    margin: 10,
    flexDirection: 'row',
    width: 305,
    height: 45,
    backgroundColor: '#C4C4C4',
  },
  buttonNext : {
    margin: 10,
    flexDirection: 'row',
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
  }
});