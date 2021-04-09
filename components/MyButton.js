import React from 'react';
import {Button, View, Alert} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const MyButton = props => {
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
        if(result.status!=='granted'){
            Alert.alert("no permissions");
            return false;
        }
        return true;
    }

    const scanDocumentHandler = async() => {
       const hasPermission = await verifyPermissions();
       if(!hasPermission)
       {
           return;
       }
         ImagePicker.launchCameraAsync();
    }
    return (
        <View>
            <Button
                title={props.title}
                onPress={scanDocumentHandler}/>
        </View>
    )
}

export default MyButton;
