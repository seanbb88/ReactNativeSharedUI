import React from 'react';
import { Text, ViewStyle } from 'react-native';


interface AppTitleProps {
    title: string;
    fontSize?: number;
    color?: string;
    optionalStyling?: ViewStyle; 
}

export const AppTitle = ({
    title, fontSize = 60, color = 'white', optionalStyling
}: AppTitleProps) => {

    return (
        <Text style={[ optionalStyling, { color, fontSize, fontFamily: "Oswald" }]}>{title}</Text>
    );
};


export default AppTitle;
