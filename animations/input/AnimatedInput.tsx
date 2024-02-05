import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, interpolateColor, interpolate } from 'react-native-reanimated';

interface AnimatedInputProps {
    placeholder: string;
    value: string;
    optionalStyling?: any;
    inputColor?: string;
    obviscateText?: boolean;
    onChangeText: (text: string) => void;
}

export const AnimatedInput = ({
    placeholder,
    value,
    optionalStyling,
    inputColor = 'white',
    obviscateText = false,
    onChangeText,
}: AnimatedInputProps) => {
    const [_isFocused, setIsFocused] = useState(false);

    const labelPosition = useSharedValue(0);

    const handleInputFocus = () => {
        setIsFocused(true);
        labelPosition.value = withTiming(-20, {
            duration: 200,
            easing: Easing.ease,
        });
    };

    const handleInputBlur = () => {
        setIsFocused(false);
        if (value === "") {
            labelPosition.value = withTiming(0, {
                duration: 200,
                easing: Easing.ease,
            });
        }
    };

    const labelStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: labelPosition.value }],
            fontSize: interpolate(labelPosition.value, [-20, 0], [16, 22]),
            color: interpolateColor(labelPosition.value, [-20, 0], [inputColor, inputColor]),
        };
    });

    return (
        <View style={[{ flex: 1, minWidth: 260, maxHeight: 38 }, optionalStyling]}>
            <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
            <TextInput
                placeholder=""
                value={value}
                secureTextEntry={obviscateText}
                onChangeText={onChangeText}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={[
                    styles.input,
                    { color: inputColor, borderBottomColor: inputColor },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        position: 'absolute',
        left: -5,
        fontSize: 20,
        paddingHorizontal: 5,
    },
    input: {
        fontSize: 20,
        padding: 4,
        borderBottomWidth: 1,
    },
});

export default AnimatedInput;
