import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface ButtonSyles { //these values actually represent a hex color or standard color name
    borderColor?: string;
    backGroundColor?: string;
    textColor?: string;
}

interface AppButtonProps {
    buttonStyle?: ButtonSyles;
    onPress: () => void;
    text: string;
}

export const AppButton = ({ onPress, text, buttonStyle = { backGroundColor: "white", textColor: 'black' } }: AppButtonProps) => {
    const { backGroundColor, textColor, borderColor } = buttonStyle;

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: backGroundColor, borderColor: borderColor, borderWidth: 1 }]} onPress={onPress} activeOpacity={0.8}>
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 12
    },
});

export default AppButton