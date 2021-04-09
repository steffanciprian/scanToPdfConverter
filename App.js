import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ImageTaker from "./components/imageTaker";

export default function App() {

    return (
        <View style={styles.container}>
            <ImageTaker
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
