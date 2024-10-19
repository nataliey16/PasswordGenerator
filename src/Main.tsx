import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Btn from './components/Btn';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox';
import Output from './components/Output';
import {showErrorSnackbar, showSuccessSnackBar} from './utility/utils';

function Main(): React.JSX.Element {
  const [passwordLength, setPasswordLength] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isUpperChecked, setIsUpperChecked] = useState(false);
  const [isLowerChecked, setIsLowerChecked] = useState(false);
  const [isSpecialChecked, setIsSpecialChecked] = useState(false);
  const [isNumberChecked, setIsNumberChecked] = useState(false);

  const handleGeneratePassword = () => {
    const numericLength = Number(passwordLength); //Convert input into a number
    if (!isNaN(numericLength) && numericLength >= 8 && numericLength <= 16) {
      console.log(numericLength);
      showSuccessSnackBar('Valid');
    } else {
      showErrorSnackbar('Invalid length value');
    }

    //check if checkboxes are checked
    if (
      !isUpperChecked ||
      !isLowerChecked ||
      !isSpecialChecked ||
      isNumberChecked
    ) {
      showErrorSnackbar('Make a selection');
    }
  };
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.txt}>Password Generator</Text>
      </View>
      <InputBox
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <FormCheckBox
        id={1}
        color="#82c2e7"
        label="Upper Case Letter"
        isChecked={isChecked}
      />
      <FormCheckBox
        id={2}
        color="#91a696"
        label="Lower Case Letter"
        isChecked={isChecked}
      />
      <FormCheckBox
        id={3}
        color="#fd915a"
        label="Special Character"
        isChecked={isChecked}
      />
      <FormCheckBox
        id={4}
        color="#cc76ee"
        label="Numbers"
        isChecked={isChecked}
      />
      <Output placeholder="Select Options..." />
      <Btn
        type={1}
        title="Generate Password"
        onPress={handleGeneratePassword}
      />
      <Btn type={2} title="Reset" />
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
