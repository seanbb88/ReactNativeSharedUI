import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const PageLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color="#255433" />
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
