import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const DayCalorieCircular = () => {
    return (
        <View>
            <AnimatedCircularProgress
                size={120}
                width={15}
                backgroundWidth={5}
                fill={70}
                tintColor="#00ff00"
                tintColorSecondary="#ff0000"
                backgroundColor="#3d5875"
                arcSweepAngle={240}
                rotation={240}
                lineCap="round"
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default DayCalorieCircular;
