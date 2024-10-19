import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type formCheckBoxPropTypes = {
  id: number;
  label: string;
  color: string;
  isChecked: boolean;
};

function FormCheckBox(props: formCheckBoxPropTypes): React.JSX.Element {
  const id = props.id;
  const label = props.label;
  const color = props.color;
  const isChecked = props.isChecked;

  return (
    <View style={styles.checkboxView}>
      <BouncyCheckbox
        isChecked={isChecked}
        size={25}
        fillColor={color}
        unFillColor="#FFFFFF"
        //text="Custom Checkbox"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        //textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <Text style={styles.label}>{label}</Text>
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
