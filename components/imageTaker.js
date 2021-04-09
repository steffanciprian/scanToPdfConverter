import React, {useState} from 'react';
import {Image, Text, View, Alert, StyleSheet, Dimensions} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import OwnButton from "./ownButton";


const ImageTaker = props => {

    const [pickedImage, setPickedImage] = useState();

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (result.status !== 'granted') {
            Alert.alert("no permissions");
            return false;
        }
        return true;
    }

    const scanDocumentHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync(
            {
                allowsEditing: true,
                aspect: [16, 9],
                base64: true,
                quality: 1,
            }
        );

        setPickedImage(image.uri);
    }
    return (
        <View>
            {!pickedImage ? <Text>No image picked</Text>
                :
                <Image
                    style={styles.image}
                    source={{uri: pickedImage}}/>}
            <OwnButton
                title={props.title}
                onPress={scanDocumentHandler}/>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width * 0.8,
    }
})

export default ImageTaker;
