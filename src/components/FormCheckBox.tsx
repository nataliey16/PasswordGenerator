import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type formCheckBoxPropTypes = {
  id: number;
  label: string;
  color: string;
  checkedStatus: boolean;
  updateCheckedStatus: (val: boolean) => void;
  // onPress: () => void;
};

function FormCheckBox(props: formCheckBoxPropTypes): React.JSX.Element {
  const id = props.id;
  const label = props.label;
  const color = props.color;
  const checkedStatus = props.checkedStatus;
  const updateCheckedStatus = props.updateCheckedStatus;

  return (
    <View style={styles.checkboxView}>
      <BouncyCheckbox
        isChecked={checkedStatus}
        size={25}
        fillColor={color}
        unFillColor="#FFFFFF"
        //text="Custom Checkbox"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        //textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          console.log(checkedStatus);
          updateCheckedStatus(isChecked);
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
