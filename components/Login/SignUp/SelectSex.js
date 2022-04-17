import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { SelectCountry } from 'react-native-element-dropdown';
import { COLORS } from '../../../constants';

  const local_data = [
    {
      value: '1',
      lable: 'male',
      image: {
        uri: 'https://flyclipart.com/thumb2/avatar-business-businessman-male-man-silhouette-user-icon-19795.png',
      },
    },
    {
      value: '2',
      lable: 'female',
      image: {
        uri: 'https://mpng.subpng.com/20180707/lrg/kisspng-avatar-computer-icons-female-administrator-5b408dc650f090.2073022115309572543315.jpg',
      },
    },
  ];


  const SelectSex = (props) => {

    return (
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
        iconStyle={styles.iconStyle}
        maxHeight={90}
        value={props.value}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select Sex"
        searchPlaceholder="Search..."
        onChange={e => {
          props.setValue(e.value);
        }}
      />
    );
  };

  export default SelectSex;

  const styles = StyleSheet.create({
    dropdown: {
      marginTop: 8,
      height: 50,
      width: 200,
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,
    },
    imageStyle: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });