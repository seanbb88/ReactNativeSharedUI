import React from 'react'
import type { PropsWithChildren } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

type FadeViewProps = PropsWithChildren<{ duration?: number }>

export const FadeView: React.FC<FadeViewProps> = ({ duration = 1000, children }) => {

    return (
        <Animated.View
            key="fade-in-out-view"
            entering={FadeIn.duration(duration)}
            exiting={FadeOut.duration(duration)}
        >
            {children}
        </Animated.View>
    )

}

export default FadeView; 