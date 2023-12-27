import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface FullScreenLoaderProps {
    loaderColor?: string
}

export const FullScreenLoader = ({ loaderColor = "#007AFF" }: FullScreenLoaderProps) => {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size={'large'} color={loaderColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray and transparent background
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default FullScreenLoader;