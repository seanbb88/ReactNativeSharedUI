import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

interface AppTitleProps {
    title: string;
    fontSize?: number;
    color?: string;
    optionalStyling?: ViewStyle;
    animatedStyling?: boolean;
}

export const AppTitle = ({
    title,
    fontSize = 60,
    color = 'white',
    optionalStyling,
    animatedStyling = false
}: AppTitleProps) => {
    const pulsatingFontSize = useSharedValue(fontSize);


    const minFontSize = fontSize - 2;
    const maxFontSize = fontSize + 2;
    const pulsationSpeed = 1000;

    const animatePulsation = () => {
        pulsatingFontSize.value = withSpring(maxFontSize, {
            damping: 1,
            stiffness: 50,
            velocity: 1,
        });

        setTimeout(() => {
            pulsatingFontSize.value = withSpring(minFontSize, {
                damping: 1,
                stiffness: 50,
                velocity: 1,
            });

            animatePulsation();
        }, pulsationSpeed);
    };

    useEffect(() => {
        animatePulsation();
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            fontSize: pulsatingFontSize.value,
        };
    });

    return (
        <Animated.Text
            style={[
                optionalStyling,
                { color, fontFamily: 'Oswald', fontSize: fontSize },
                animatedStyling && animatedStyle,
            ]}
        >
            {title}
        </Animated.Text>
    );
};

export default AppTitle;
