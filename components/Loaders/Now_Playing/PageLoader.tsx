import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface PageLoaderProps {
    loaderColor: "007AFF"
}

export const PageLoader = ({ loaderColor }: PageLoaderProps) => {
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
