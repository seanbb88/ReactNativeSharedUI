import React, { PropsWithChildren } from 'react';
import { Animated, StyleSheet } from 'react-native';


type BreathingViewProps = PropsWithChildren<{}>

export const BreathingView = ({ children }: BreathingViewProps) => {
    const scaleValue = new Animated.Value(1);

    Animated.loop(
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
        ])
    ).start();

    return (
        <Animated.View style={[styles.breathingContainer, { transform: [{ scale: scaleValue }] }]}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    breathingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BreathingView;








