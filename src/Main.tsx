import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Btn from './components/Btn';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox';
import Output from './components/Output';
import {showErrorSnackbar, showSuccessSnackBar} from './utility/utils';
import {generatePasswordString} from './utility/passwordGenerator'; // Importing password generation function

function Main(): React.JSX.Element {
  const [passwordLength, setPasswordLength] = useState('');
  const [checkboxVal, setCheckboxVal] = useState(false);
  const [upperCheckboxVal, setUpperCheckboxVal] = useState(false);
  const [lowerCheckboxVal, setLowerCheckboxVal] = useState(false);
  const [specialCheckboxVal, setSpecialCheckboxVal] = useState(false);
  const [numberCheckboxVal, setNumberCheckboxVal] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const numericLength = Number(passwordLength); //Convert input into a number

    if (isNaN(numericLength) || numericLength < 8 || numericLength > 16) {
      showErrorSnackbar('Invalid length value. It must be between 8 and 16.');
      return;
    }

    // Check if at least one option is selected
    if (
      upperCheckboxVal ||
      lowerCheckboxVal ||
      specialCheckboxVal ||
      numberCheckboxVal
      // !isLowerChecked &&
      // !isSpecialChecked &&
      // !isNumberChecked
    ) {
      showSuccessSnackBar('You made a selection');
    } else {
      showErrorSnackbar('Make a selection');
      return;
    }

    // const handleReset = () => {
    //   setPasswordLength('');
    //   setIsUpperChecked(false);
    //   setIsLowerChecked(false);
    //   setIsSpecialChecked(false);
    //   setIsNumberChecked(false);
    //   setGeneratedPassword('');
  };

  const updateCheckedStatus = (status: boolean) => {
    console.log(`Checked Status: ${status}`);
    // setCheckboxVal(status);
    setUpperCheckboxVal(status);
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
        checkedStatus={upperCheckboxVal}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id={2}
        color="#91a696"
        label="Lower Case Letter"
        checkedStatus={checkboxVal}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id={3}
        color="#fd915a"
        label="Special Character"
        checkedStatus={checkboxVal}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id={4}
        color="#cc76ee"
        label="Numbers"
        checkedStatus={checkboxVal}
        updateCheckedStatus={updateCheckedStatus}
      />
      <Output
        placeholder="Select Options..."
        generatedPassword={generatedPassword}
      />
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
