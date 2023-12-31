import React from 'react';
import { Text } from 'react-native';


interface AppTitleProps {
    title: string;
    fontSize?: number;
    color?: string;
}

export const AppTitle = ({
    title, fontSize = 60, color = 'white'
}: AppTitleProps) => {

    return (
        <Text style={{ color, fontSize, fontFamily: "Oswald" }}>{title}</Text>
    );
};


export default AppTitle;
