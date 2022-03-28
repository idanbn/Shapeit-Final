import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { COLORS } from '../../constants';

const FieldInfo = (props) => {
    return (
            <View style={{flexDirection:'row',borderWidth: 1, borderColor: COLORS.border, marginTop:10}}>

                <View style={{ borderWidth: 1, borderColor: COLORS.darkgray, padding: 10 }}>

                    <Text style={{ color: COLORS.primary, fontSize: 28 }}> {props.fieldName} </Text>

                </View>

                <View style={{  padding: 14 }}>

                    <Text style={{ color: COLORS.darkgray, fontSize: 25 }}> {props.fieldValue} </Text>

                </View>

            </View>

    );
}

const styles = StyleSheet.create({})

export default FieldInfo;
