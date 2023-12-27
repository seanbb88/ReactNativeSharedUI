import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';

class ApplicationLoader extends Component {
    circlePosition = new Animated.Value(0);

    componentDidMount() {
        this.animateCircle();
    }

    animateCircle() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.circlePosition, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(this.circlePosition, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }

    render() {
        const circleTranslateX = this.circlePosition.interpolate({
            inputRange: [0, 1],
            outputRange: [30, 350],
        });

        return (
            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        width: '100%',
                        height: 200,
                        backgroundColor: 'transparent',
                        position: 'relative',

                    }}
                >

                    <Animated.View
                        style={{
                            width: 15,
                            height: 15,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            position: 'absolute',
                            bottom: -10,
                            left: circleTranslateX,
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default ApplicationLoader;


