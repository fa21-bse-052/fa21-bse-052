import React from "react";
import { View, Image, StyleSheet } from 'react-native';

const Background = ({ children }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/unsplash.jpg")} style={styles.imageBackground} />
            <View style={styles.overlay}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Background;

