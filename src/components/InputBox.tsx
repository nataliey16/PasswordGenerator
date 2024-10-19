import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function InputBox(): React.JSX.Element {
  return (
    <View>
      <TextInput style={styles.inputBox} value="Password Length (8-16)" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    margin: 10,
    padding: 5,
  },
});

export default InputBox;
