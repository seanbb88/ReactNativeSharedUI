import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';

interface ButtonStyles {
    // These values actually represent a hex color or standard color name
    borderColor?: string;
    backGroundColor?: string;
    textColor?: string;
    textSize?: number;
    isLink?: boolean;
}

interface AppButtonProps {
    buttonStyle?: ButtonStyles;
    onPress: () => void;
    text: string;
    disabled?: boolean;
    optionalStyling?: ViewStyle;
}

export const AppButton = ({
    onPress,
    text,
    disabled = false,
    buttonStyle = { backGroundColor: 'white', textColor: 'black', textSize: 12, isLink: false },
    optionalStyling
}: AppButtonProps) => {
    const { backGroundColor, textColor, textSize, borderColor, isLink } = buttonStyle;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: backGroundColor,
                    borderColor: borderColor,
                    borderWidth: 1,
                    alignItems: "center",
                    alignSelf: 'flex-start',
                },
                isLink && styles.linkButton,
                optionalStyling && optionalStyling,
            ]}
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[
                { color: textColor, fontSize: textSize },
            ]}>{text}</Text>
            {isLink && <View style={[styles.borderBottom, { backgroundColor: textColor }]}></View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    linkButton: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    borderBottom: {
        width: '100%',
        height: 1,
    }
});

export default AppButton;
