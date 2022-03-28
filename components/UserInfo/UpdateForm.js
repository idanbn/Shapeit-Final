import React from 'react';
import {View, StyleSheet} from 'react-native';
import SlideModel from './SlideModel';

const UpdateForm = (props) => {
    return (
        <SlideModel setModelSelcted={props.setModelSelcted} modelSelcted={props.modelSelcted} >
            
        </SlideModel>
    );
}

const styles = StyleSheet.create({})

export default UpdateForm;
