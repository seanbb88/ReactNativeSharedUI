import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface AnimatedToggleProps {
    optionOne: string;
    optionTwo: string;
    onToggle: (toggleValue: string) => void;
    optionalStyling?: ViewStyle;
    defaultSelection?: string;
}


export const AnimatedToggle = ({ optionOne, optionTwo, onToggle, optionalStyling, defaultSelection }: AnimatedToggleProps) => {
    const [isOptionOneSelected, setIsOptionOneSelected] = useState(true);

    useEffect(() => {
        if (defaultSelection === optionTwo) {
            setIsOptionOneSelected(false);
        }
    }, [defaultSelection, optionTwo]);

    const toggleSwitch = () => {
        const newValue = isOptionOneSelected ? optionTwo : optionOne;
        setIsOptionOneSelected(!isOptionOneSelected);
        onToggle(newValue);
    };

    return (
        <View style={optionalStyling}>
            <TouchableOpacity onPress={toggleSwitch} style={styles.toggle}>
                <View style={[styles.toggleTrack, isOptionOneSelected ? styles.toggleTrackOn : styles.toggleTrackOff]}>
                    <View style={[styles.toggleCircle, isOptionOneSelected ? styles.toggleCircleOn : styles.toggleCircleOff]} />
                    <Text style={[styles.toggleText, !isOptionOneSelected && styles.alternateText]}>
                        {isOptionOneSelected ? optionOne : optionTwo}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    toggle: {
        width: 160,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white'
    },
    toggleTrack: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 25,
        alignItems: 'center',
    },
    toggleTrackOn: {
        backgroundColor: 'transparant',
    },
    toggleTrackOff: {
        backgroundColor: 'transparant',
    },
    toggleCircle: {
        width: 200,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
    },
    toggleCircleOn: {
        transform: [{ translateX: 100 }],
    },
    toggleCircleOff: {
        transform: [{ translateX: 0 }],
    },
    toggleText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        left: 15,
    },
    alternateText: {
        color: 'black'
    }
});

export default AnimatedToggle;
