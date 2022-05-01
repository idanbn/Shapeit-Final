//materials.map(material => material.length)
import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, images } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { auth } from '../../FireBase/GetDBs/reduce';
import { useSelector } from 'react-redux';


const HelloHeader = (props) => {
    const [timeText, setTimeText] = useState('');
    const [iconName, setIconName] = useState('');


    useEffect(() => {
        var hours = new Date().getHours(); //Current Hours
        getTimeText(hours);


    }, [timeText]);


    const getTimeText = async (currentHours) => {
        if (currentHours >= 6) {
            if (currentHours < 12) {
                setTimeText('Good Morning  ');
                setIconName('partly-sunny-outline');
            }
            else if (currentHours < 18) {
                setTimeText('Good Afternoon');
                setIconName('sunny-outline');
            }
            else if (currentHours < 24) {
                setTimeText('Good Evening  ');
                setIconName('moon-outline');
            }
        }
        else {
            setTimeText('Good Night    ');
            setIconName('cloudy-night-outline');
        }

        // console.log(currentHours);
    }

    const { currentUser } = useSelector(state => state.usersReducer);

    return (
        <View style={styles.continuer}>
            <RenderWellcome timeText={timeText} iconName={iconName} />
            <RenderUserName name={currentUser.userInfo?.name} />

        </View>
    );
}

const RenderWellcome = (props) => {

    return (
        <View style={{
            flexDirection: 'row',

        }}>

            <Ionicons
                name={props.iconName}
                style={styles.SunIcon}
                color={COLORS.icons}
            />

            <MorningOrNight currentTimeText={props.timeText} />

            <TouchableOpacity
                onPress={() => console.log('updates')}
            >

                <FontAwesome
                    name='bell-o'
                    style={styles.bellIcon}
                    color={COLORS.icons}
                />

            </TouchableOpacity>

        </View>
    )
}

const MorningOrNight = (props) => {

    return (
        <View>
            { }

            <Text style={styles.timeText}> {props.currentTimeText}</Text>

        </View>
    )
}

const RenderUserName = (props) => {

    return (
        <View>

            <Text style={styles.userNameText}> {props.name} </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    continuer: {
        paddingHorizontal: 20,
        backgroundColor: '#eff5f5',
        paddingTop: 10,


    },
    SunIcon: {
        fontSize: 26,

    },
    timeText: {
        color: COLORS.darkgray,
        fontSize: 18,
        paddingHorizontal: 6,
        marginTop: 3,


    },
    bellIcon: {
        marginTop: 9,
        fontSize: 24,
        paddingHorizontal: 200,


    },
    userNameText: {
        color: COLORS.black,
        fontWeight: '700',
        fontSize: 24,

    },
})

export default HelloHeader;
