import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UpdateName from './UpdateName';
import UpdateBMR from './Updates/UpdateBMR';

const FieldInfo = (props) => {

    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: COLORS.border, marginTop: 10, marginHorizontal: 20, borderRadius: 20 }}>

            <View style={{ borderWidth: 1, borderColor: COLORS.darkgray, padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 6, borderBottomRightRadius: 6, borderBottomLeftRadius: 20 }}>

                <Text style={{ color: COLORS.primary, fontSize: 28 }}> {props.fieldName} </Text>

            </View>

            <View style={{ padding: 14, flexDirection: 'row', flex: 1 }}>

                <Text style={{ color: COLORS.darkgray, fontSize: 25 }}> {props.fieldValue} </Text>
                {
                    props.fieldName !== 'email' ?

                        < TouchableOpacity
                            style={{ alignItems: 'flex-end', flex: 1 }}
                            onPress={() => {
                                props.setSelectedField(props.fieldName);
                                props.setUpdateSelect(true);
                            }}
                        >

                            <MaterialIcons name="update" size={30} color={COLORS.darkgray} />
                        </TouchableOpacity>


                        : null

                }


            </View>
            {props.selectedField === 'name' ? <UpdateName setModelSelcted={props.setUpdateSelect} modelSelcted={props.updateSelect} /> : null}
            {props.selectedField === 'BMR' ? <UpdateBMR setModelSelcted={props.setUpdateSelect} modelSelcted={props.updateSelect} /> : null}



        </View >

    );
}

const styles = StyleSheet.create({})

export default FieldInfo;
