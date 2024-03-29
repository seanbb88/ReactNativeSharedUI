import React, { useEffect } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, withSequence } from 'react-native-reanimated';
import { Svg, Path } from 'react-native-svg';
import { AppTitle } from '../../../components';

interface NowPlayingLoaderProps {
    showTitle?: boolean;
    height?: number;
    width?: number;
    optionalStyling?: ViewStyle;
}

export const NowPlayingLoader = ({ showTitle = true, height = 200, width = 200, optionalStyling }: NowPlayingLoaderProps) => {
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
                <Svg
                    width={height}
                    height={width}
                    fill="#FFF"
                    viewBox="0 0 463 463"
                >
                    <Path d="M395.195 67.805C351.471 24.08 293.336 0 231.5 0S111.529 24.08 67.805 67.805 0 169.664 0 231.5s24.08 119.971 67.805 163.695S169.664 463 231.5 463s119.971-24.08 163.695-67.805S463 293.336 463 231.5s-24.08-119.971-67.805-163.695zm-10.606 316.784C343.697 425.48 289.329 448 231.5 448s-112.197-22.52-153.089-63.411S15 289.329 15 231.5 37.52 119.303 78.411 78.411 173.671 15 231.5 15s112.197 22.52 153.089 63.411S448 173.671 448 231.5s-22.52 112.197-63.411 153.089z" />
                    <Path d="M359.5 168c-35.014 0-63.5 28.486-63.5 63.5s28.486 63.5 63.5 63.5 63.5-28.486 63.5-63.5-28.486-63.5-63.5-63.5zM311 231.5c0-26.62 21.559-48.292 48.133-48.491C365.015 198.47 368 214.761 368 231.5c0 16.738-2.985 33.03-8.867 48.491C332.559 279.792 311 258.12 311 231.5zm65.006 45.604C380.645 262.417 383 247.132 383 231.5c0-15.632-2.355-30.917-6.993-45.604C394.647 192.664 408 210.551 408 231.5c0 20.95-13.353 38.836-31.994 45.604zM103.5 168C68.486 168 40 196.486 40 231.5S68.486 295 103.5 295s63.5-28.486 63.5-63.5-28.486-63.5-63.5-63.5zM55 231.5c0-20.95 13.353-38.836 31.993-45.604C82.355 200.583 80 215.869 80 231.5c0 15.633 2.355 30.917 6.993 45.604C68.352 270.335 55 252.449 55 231.5zm48.868 48.491C97.986 264.53 95 248.239 95 231.5c0-16.737 2.983-33.03 8.866-48.491C130.44 183.208 152 204.88 152 231.5s-21.558 48.291-48.132 48.491zM231.5 40c-35.014 0-63.5 28.486-63.5 63.5s28.486 63.5 63.5 63.5 63.5-28.486 63.5-63.5S266.514 40 231.5 40zm0 15c20.95 0 38.836 13.353 45.604 31.993C262.415 82.356 247.129 80 231.5 80c-15.632 0-30.917 2.356-45.604 6.994C192.664 68.353 210.55 55 231.5 55zm0 97c-26.62 0-48.292-21.559-48.491-48.133C198.47 97.984 214.762 95 231.5 95c16.734 0 33.028 2.982 48.491 8.864C279.793 130.439 258.121 152 231.5 152zM231.5 296c-35.014 0-63.5 28.486-63.5 63.5s28.486 63.5 63.5 63.5 63.5-28.486 63.5-63.5-28.486-63.5-63.5-63.5zm0 15c26.62 0 48.292 21.56 48.491 48.134C264.53 365.017 248.237 368 231.5 368c-16.738 0-33.029-2.985-48.491-8.868.2-26.573 21.871-48.132 48.491-48.132zm0 97c-20.95 0-38.836-13.353-45.604-31.993C200.583 380.645 215.868 383 231.5 383c15.631 0 30.917-2.355 45.604-6.993C270.336 394.647 252.45 408 231.5 408zM259.5 279c10.752 0 19.5-8.748 19.5-19.5s-8.748-19.5-19.5-19.5-19.5 8.748-19.5 19.5 8.748 19.5 19.5 19.5zm0-24c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zM259.5 223c10.752 0 19.5-8.748 19.5-19.5s-8.748-19.5-19.5-19.5-19.5 8.748-19.5 19.5 8.748 19.5 19.5 19.5zm0-24c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zM203.5 279c10.752 0 19.5-8.748 19.5-19.5s-8.748-19.5-19.5-19.5-19.5 8.748-19.5 19.5 8.748 19.5 19.5 19.5zm0-24c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zM203.5 223c10.752 0 19.5-8.748 19.5-19.5s-8.748-19.5-19.5-19.5-19.5 8.748-19.5 19.5 8.748 19.5 19.5 19.5zm0-24c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5z" />
                </Svg>
            </Animated.View>
            {showTitle && <AppTitle optionalStyling={{ marginTop: 24 }} title="Now Playing" animatedStyling={true} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NowPlayingLoader;

