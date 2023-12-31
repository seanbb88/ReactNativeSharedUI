import React from 'react';
import { Text } from 'react-native';


interface AppTitleProps {
    title: string;
    fontSize?: number;
    fontFamily?: string;
    color?: string;
}

export const AppTitle = ({
    title, fontFamily = "", fontSize = 20, color = 'white'
}: AppTitleProps) => {

    return (
        <Text style={{ color, fontSize, fontFamily }}>{title}</Text>
    );
};


export default AppTitle;
