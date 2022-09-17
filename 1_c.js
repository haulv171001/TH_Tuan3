import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.contaneir}>
      <View
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          width: 300,
          height: 190,
        }}>
        <Text
          style={{
            fontSize: 50,
            fontStyle: 'normal',
            lineHeight: 18,
            fontWeight: 550,
          }}>
          CODE
        </Text>
      </View>

      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          width: 300,
          height: 65,
          fontSize: 20,
          fontStyle: 'normal',
          lineHeight: 18,
          fontWeight: 550,
        }}>
        VERIFICATION
      </Text>

      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          width: 300,
          height: 65,
          fontSize: 14,
          fontStyle: 'normal',
          lineHeight: 18,
          color: 'black',
          fontWeight: 550,
        }}>
        Enter ontime password sent on{'\n'}++849092605798
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 300,
          height: 65,
        }}>
        <TextInput style={styles.box} />
        <TextInput style={styles.box} />
        <TextInput style={styles.box} />
        <TextInput style={styles.box} />
        <TextInput style={styles.box} />
        <TextInput style={styles.box} />
      </View>
      <View style={styles.buttonNext}>
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontSize: 15,
              lineHeight: 18,
              color: 'black',
              fontWeight: 700,
            }}>
            VERIFY CODE
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contaneir: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
  },
  box: {
    width: 45,
    height: 40,
    borderWidth: 1,
  },
  buttonNext: {
    justifyContent: 'center',
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
  },
});
