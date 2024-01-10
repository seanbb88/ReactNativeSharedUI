import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Animated, Easing, ViewStyle } from 'react-native';

interface CustomInputProps {
    placeholder: string;
    value: string;
    optionalStyling?: ViewStyle;
    inputColor?: string;
    onChangeText: (text: string) => void;
}

export const CustomInput = ({ placeholder, value, optionalStyling, inputColor = 'white', onChangeText }: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = new Animated.Value(isFocused || value !== "" ? 38 : 0);

    const handleInputFocus = () => {
        setIsFocused(true);
        Animated.timing(labelPosition, {
            toValue: 38,
            duration: 10000,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    };

    const handleInputBlur = () => {
        setIsFocused(false);
        if (value === "") { // Check if the input is empty when blurring
            Animated.timing(labelPosition, {
                toValue: 0,
                duration: 10000,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <View style={optionalStyling}>
            <Animated.Text
                style={[
                    styles.label,
                    {
                        top: labelPosition,
                        color: inputColor
                    },
                ]}
            >
                {placeholder}
            </Animated.Text>
            <TextInput
                placeholder=""
                value={value}
                onChangeText={onChangeText}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={[styles.input, { color: inputColor, borderBottomColor: inputColor }]}
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
    },
    input: {
        fontSize: 22,
        padding: 4,
        borderBottomWidth: 1,
    },
});

export default CustomInput;
