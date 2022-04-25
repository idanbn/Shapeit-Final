import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
import { updateProfile } from "firebase/auth";
import { manipulateAsync } from 'expo-image-manipulator';


import { ref, deleteObject, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { COLORS } from '../../../constants';
import appTheme from '../../../constants/theme';
import { auth, storage_db } from '../../../FireBase/GetDBs/reduce';
import { async } from '@firebase/util';

const UpdateImage = (props) => {

    return (
        <>
            {props.firstRender ?
                null

                : <Animatable.View
                    animation={props.chooseGallery ? "slideInUp" : "fadeOutDown"}
                    duration={800}
                    style={styles.Card}
                >
                    <CloseB setChooseFromGallery={props.setChooseFromGallery} />

                    <View style={{ top: 36, alignItems: 'center' }}>
                        <ChooseFromGallery setChooseFromGallery={props.setChooseFromGallery} />
                        <TakeImageFromCamera setChooseFromGallery={props.setChooseFromGallery} />
                    </View>
                </Animatable.View>

            }
        </>
    );
}
const CloseB = (props) => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                flex: 1,
                top: -30,
                right: 0, left: 0,
                alignItems: 'center',

            }}
            onPress={() => props.setChooseFromGallery(false)}
        >
            <Ionicons
                name='remove-outline'
                style={{
                    fontSize: 80,
                    color: COLORS.icons,
                    opacity: 0.6,


                }}
            />
        </TouchableOpacity>
    );
};

const TakeImageFromCamera = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.button, marginTop: 10 }}
            onPress={() => props.setChooseFromGallery(false)}

        >
            <Text>Take Image From Camera</Text>
        </TouchableOpacity>
    );
};

const ChooseFromGallery = (props) => {
    const [image, setImage] = React.useState(null);

    const getImage = async () => {
        let photo = await ImagePicker.launchImageLibraryAsync(
            {
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            },
        );

        const manipResult = await manipulateAsync(
            photo.uri,
            [{ resize: { width: 500, height: 500 } }],
            { format: 'jpeg' }
        );

        if (!photo.cancelled) {
            deleteRef();
            uploadImageAsync(manipResult.uri);
        };


    };

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => { props.setChooseFromGallery(false); getImage(); }}
        >
            <Text>Choose from gallery</Text>
        </TouchableOpacity>
    );
};


const uploadImageAsync = async (uri) => {
    
    const filename = uri.replace(/^.*[\\\/]/, '');
    const storageRef = ref(storage_db, `/userImages/${auth.currentUser.uid}/${filename}`);

    const img = await fetch(uri);
    const blob = await img.blob();

    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed',
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    //console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                updateUserImage(downloadURL);
                //console.log('File available at', downloadURL);
            });
        }
    );

};

const deleteRef = () => {
    // Create a reference to the file to delete
    const desertRef = ref(storage_db, `/userImages/${auth.currentUser.uid}`);

    // Delete the file
    deleteObject(desertRef).then(() => {
        // File deleted successfully
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });
};

const updateUserImage = async (imageUrl) => {
    updateProfile(auth.currentUser, {
        photoURL: imageUrl
    }).then(() => {
        // Profile updated!

    }).catch((error) => {
        console.log(error);
    });
};

const styles = StyleSheet.create({
    Card: {
        position: 'absolute',
        top: appTheme.SIZES.height / 1.38,
        left: 0, right: 0,
        height: appTheme.SIZES.height / 4.8,
        borderRadius: 20,
        backgroundColor: COLORS.card,
        marginHorizontal: 3,
    },
    button: {
        backgroundColor: COLORS.icons,
        padding: 16,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
})

export default UpdateImage;
