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
  const [checkboxVal, setCheckboxVal] = useState({
    upper: false,
    lower: false,
    special: false,
    number: false,
  });

  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleReset = () => {
    setPasswordLength('');
    setCheckboxVal({
      upper: false,
      lower: false,
      special: false,
      number: false,
    });
    setGeneratedPassword('');
  };

  const handleGeneratePassword = () => {
    const numericLength = Number(passwordLength); //Convert input into a number

    if (isNaN(numericLength) || numericLength < 8 || numericLength > 16) {
      showErrorSnackbar('Invalid length value. It must be between 8 and 16.');
      return;
    }

    // Check if at least one option is selected
    const isAnyCheckBoxSelected = Object.values(checkboxVal).some(val => val);

    if (isAnyCheckBoxSelected) {
      showSuccessSnackBar('You made a selection');
    } else {
      showErrorSnackbar('Make a selection');
      return;
    }

    const handleReset = () => {
      setPasswordLength('');
      setCheckboxVal({
        upper: false,
        lower: false,
        special: false,
        number: false,
      });
      setGeneratedPassword('');
    };
  };

  //Updated checkbox values dynamically
  const updateCheckedStatus = (id: string, status: boolean) => {
    setCheckboxVal(prevState => ({
      ...prevState,
      [id]: status,
    }));
    console.log(`Checked Status: ${id}, ${status}`);
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
        id="upper"
        color="#82c2e7"
        label="Upper Case Letter"
        checkedStatus={checkboxVal.upper}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id="lower"
        color="#91a696"
        label="Lower Case Letter"
        checkedStatus={checkboxVal.lower}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id="special"
        color="#fd915a"
        label="Special Character"
        checkedStatus={checkboxVal.special}
        updateCheckedStatus={updateCheckedStatus}
      />
      <FormCheckBox
        id="number"
        color="#cc76ee"
        label="Numbers"
        checkedStatus={checkboxVal.number}
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
      <Btn type={2} title="Reset" onPress={handleReset} />
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
