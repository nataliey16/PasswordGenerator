import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function FormCheckBox(): React.JSX.Element {
  return (
    <View style={styles.checkboxView}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        //text="Custom Checkbox"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        //textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <Text style={styles.label}>Upper Case Letter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: 'row',
    padding: 10,
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default FormCheckBox;
