import React from 'react';
import {Button, StyleSheet} from "react-native";


const OwnButton = props => {
    return (
        <Button
            title={props.title}
            onPress={props.onPress}/>
    )
}

const styles = StyleSheet.create({})

export default OwnButton;
