import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type inputBoxPropTypes = {
  passwordLength: string;
  setPasswordLength: (val: string) => void;
};

function InputBox(props: inputBoxPropTypes): React.JSX.Element {
  const passwordLength = props.passwordLength;
  const setPasswordLength = props.setPasswordLength;
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Password Length (8-16)"
        value={passwordLength.toString()}
        maxLength={2}
        onChangeText={setPasswordLength}
      />
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
