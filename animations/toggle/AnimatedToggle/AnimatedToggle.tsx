import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextInsideToggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <TouchableOpacity onPress={toggleSwitch} style={styles.toggle}>
            <View style={[styles.toggleCircle, isOn ? styles.toggleOn : styles.toggleOff]}>
                <Text style={styles.toggleText}>{isOn ? 'On' : 'Off'}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    toggle: {
        width: 100,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleCircle: {
        width: 96,
        height: 46,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleOn: {
        backgroundColor: 'green',
    },
    toggleOff: {
        backgroundColor: 'gray',
    },
    toggleText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TextInsideToggle;
