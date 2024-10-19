import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from './components/Btn';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox';

function Main(): React.JSX.Element {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.txt}>Password Generator</Text>
      </View>
      <InputBox />
      <FormCheckBox />
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontWeight: '600',
    fontSize: 30,
    color: '#000',
  },
});

export default Main;
