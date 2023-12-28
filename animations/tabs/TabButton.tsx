
import React from 'react';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolation,
} from 'react-native-reanimated';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
    item: IconProp;
    index: number;
    activeIndex: Animated.SharedValue<number>;
    width: number;
    position: number;
    readonly indicatorPosition: Animated.SharedValue<number>;
    handleClick: (index: number) => void;
};

export function TabButton({
    item,
    index,
    activeIndex,
    width,
    position,
    indicatorPosition,
    handleClick
}: ButtonProps) {
    const staticIconStyle = useAnimatedStyle(() => {
        const visibility = interpolate(
            indicatorPosition.value,
            [
                position - width / 2,
                position - width / 8,
                position + width / 8,
                position + width / 2,
            ],
            [1, 0, 0, 1],
            Extrapolation.CLAMP
        );
        return {
            opacity: visibility,
            transform: [{ translateY: 10 * (1 - visibility) }],
        };
    });

    return (
        <TouchableWithoutFeedback onPress={() => {
            (activeIndex.value = index)
            handleClick(index)
        }}>
            <View style={styles.tab}>
                <Animated.View style={staticIconStyle}>
                    <FontAwesomeIcon icon={item} color="black" size={25} />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        zIndex: 2,
    },
});
