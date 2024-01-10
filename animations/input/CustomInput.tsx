import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, interpolateColor, interpolate } from 'react-native-reanimated';

interface CustomInputProps {
    placeholder: string;
    value: string;
    optionalStyling?: any;
    inputColor?: string;
    onChangeText: (text: string) => void;
}

export const CustomInput = ({
    placeholder,
    value,
    optionalStyling,
    inputColor = 'white',
    onChangeText,
}: CustomInputProps) => {
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
        labelPosition.value = withTiming(0, {
            duration: 200,
            easing: Easing.ease,
        });
    };

    const labelStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: labelPosition.value }],
            fontSize: interpolate(labelPosition.value, [-20, 0], [16, 22]),
            color: interpolateColor(labelPosition.value, [-20, 0], [inputColor, inputColor]),
        };
    });

    return (
        <View style={[optionalStyling, { flex: 1, width: '100%' }]}>
            <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
            <TextInput
                placeholder=""
                value={value}
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
        fontSize: 22,
        paddingHorizontal: 5,
        width: "100%"
    },
    input: {
        fontSize: 22,
        padding: 4,
        borderBottomWidth: 1,
        width: "100%",
        minWidth: 200
    },
});

export default CustomInput;
