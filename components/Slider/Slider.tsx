import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SliderProps {
    initialValue: number | null;
    onValueChange: (ranking: number) => void;
}

export const RankingSlider = ({ initialValue, onValueChange }: SliderProps) => {
    const [value, setValue] = useState(initialValue !== null ? initialValue : 0);

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        onValueChange(newValue);
    };

    const isDisabledStyle = initialValue === null ? styles.disabled : null;

    return (
        <View style={styles.container}>
            <Slider
                style={[styles.slider, isDisabledStyle]}
                minimumValue={0}
                maximumValue={10}
                step={0.01}
                value={value}
                onValueChange={handleValueChange}
                thumbTintColor={initialValue === null ? 'gray' : 'white'}
                minimumTrackTintColor="#FF7F7F"
                maximumTrackTintColor="#83F28F"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {
        width: 200,
    },
    disabled: {
        width: 30,
        height: 30,
        borderRadius: 15,
        opacity: 0.5,
    },
    valueText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RankingSlider;
