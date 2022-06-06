import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  Text,
  ActivityIndicator,
} from 'react-native';

import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
} from '../helpers/tensor-helper';
import { cropPicture } from '../helpers/image-helper';
import MealsDataS from '../components/Home/MealsDataS';

import { Camera } from 'expo-camera';
import { Video } from "expo-av";
import { MealsbyCategory } from '../API/FoodAPI';

const RESULT_MAPPING = ['Ceaser-Salad', 'Omlette', 'Pizza'];
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

const MainScreen = () => {
  const cameraRef = useRef();
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedShape, setPresentedShape] = useState('');

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  const [isSelcted, setIsSelected] = useState(false);
  const [data, setData] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  const handleImageCapture = async () => {
    setIsProcessing(true);
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 300);
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);

    const prediction = await startPrediction(model, tensor);

    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );

    const res = RESULT_MAPPING[highestPrediction];
    setPresentedShape(res);

    console.log(prediction);

    const da = await MealsbyCategory(res);
    setData(da[0]);

    console.log(res);

  };


  return (
    <>
      <View style={styles.container}>
        <Modal visible={isProcessing} transparent={true} animationType="slide">
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text>Your current Meal is {presentedShape}</Text>
              {presentedShape === '' && <ActivityIndicator size="large" />}

              {
                data !== null ?
                  <>
                    <Pressable
                      onPress={() => { setIsSelected(true); }}
                      style={styles.dismissButton}
                    >
                      <Text style={styles.modalButtonText}>result</Text>
                    </Pressable>

                    <MealsDataS data={data} setModelSelcted={setIsSelected} modelSelcted={isSelcted} />
                  </>
                  : null
              }
              {data === '' && <ActivityIndicator size="large" />}


              <Pressable
                style={styles.dismissButton}
                onPress={() => {
                  setPresentedShape('');
                  setIsProcessing(false);
                }}>
                <Text>Dismiss</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          autoFocus={true}
          whiteBalance={Camera.Constants.WhiteBalance.auto}></Camera>
        <Pressable
          onPress={() => handleImageCapture()}
          style={styles.captureButton}></Pressable>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  captureButton: {
    position: 'absolute',
    left: Dimensions.get('screen').width / 2 - 50,
    bottom: 40,
    width: 100,
    zIndex: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 24,
    backgroundColor: 'gray',
  },
  dismissButton: {
    width: 150,
    height: 50,
    marginTop: 60,
    borderRadius: 24,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

});

export default MainScreen;