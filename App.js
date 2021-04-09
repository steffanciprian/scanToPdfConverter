import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MyButton from "./components/MyButton";

export default function App() {

    return (
        <View style={styles.container}>
            <MyButton
                title="Scan document"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
