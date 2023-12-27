import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

interface FullScreenLoaderProps {
    loaderColor?: string
    visible: boolean // A prop to control the visibility of the loader
}

export const FullScreenLoader = ({ loaderColor = "#007AFF", visible }: FullScreenLoaderProps) => {
    return (
        <Modal
            transparent
            animationType="none"
            visible={visible}
        >
            <View style={styles.overlay}>
                <ActivityIndicator size={'large'} color={loaderColor} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray and transparent background
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});

export default FullScreenLoader;
