import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface PageLoaderProps {
    loaderColor: string
}

export const PageLoader = ({ loaderColor = "#007AFF" }: PageLoaderProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={loaderColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PageLoader;
