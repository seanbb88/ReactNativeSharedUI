import React, { useEffect } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, withSequence } from 'react-native-reanimated';
import { AppTitle } from '../../../components';
import Iconicons from '@expo/vector-icons/Ionicons'

interface UntitledAppLoaderProps {
    showTitle?: boolean;
    optionalStyling?: ViewStyle;
}

export const UntitledAppLoader = ({ showTitle = true, optionalStyling }: UntitledAppLoaderProps) => {
    const rotation = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    useEffect(() => {
        rotation.value = withRepeat(
            withSequence(
                withSpring(360, { damping: 2, stiffness: 80, velocity: 10 }),
                withSpring(0, { damping: 2, stiffness: 80 })
            ),
            -1,
            true
        );
    }, []);

    return (
        <View style={[styles.container, optionalStyling]}>
            <Animated.View style={animatedStyles}>
                <Iconicons color="white" size={90} name="walk-outline" />
            </Animated.View>
            {showTitle && <AppTitle optionalStyling={{ marginTop: 18 }} title="Untitled App" animatedStyling={true} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UntitledAppLoader;

