import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import {
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NOW_PLAYING_TAB_COUNT } from '../../constants';
import { TabButton } from './TabButton';

const { width, height } = Dimensions.get('window');

interface TabBarProps {
    tabs: TabProps[],
    backGroundColor?: any;
    onTabChange: (tabIndex: number) => void;
}

interface TabProps {
    name: string;
    item: any;
}

type ActiveIconProps = {
    item: IconProp;
    index: number;
    activeIndex: Animated.SharedValue<number>;
    width: number;
};


const tabWidth = width / NOW_PLAYING_TAB_COUNT;

const getPath = () => {
    const tab = shape.line().curve(shape.curveBasis)([
        [0, 0],
        [tabWidth / 4, 0],
        [tabWidth / 2, 8],
        [tabWidth, 80],
        [(tabWidth / 2) * 3, 8],
        [(tabWidth / 4) * 7, 0],
        [tabWidth * 2, 0],
    ]);
    return `${tab}`;
};
const d = getPath();

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    tabs: {
        position: 'absolute',
        left: -tabWidth,
    },
    activeIcon: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        position: 'absolute',
        width: tabWidth,
        top: -8,
        left: tabWidth / 2,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
});




function ActiveIcon({ item, index, activeIndex }: ActiveIconProps) {
    const circleIconStyle = useAnimatedStyle(() => {
        const isActive = index === activeIndex.value;
        const yOffset = isActive ? 0 : 80;
        return {
            transform: [
                {
                    translateY: withDelay(isActive ? 150 : 0, withTiming(yOffset)),
                },
            ],
        };
    });

    return (
        <Animated.View style={[styles.circleIcon, circleIconStyle]}>
            <View style={styles.activeIcon}>
                <FontAwesomeIcon icon={item} color="black" size={25} />
            </View>
        </Animated.View>
    );
}

function Bar({ tabs, backgroundColor, handleClick }: { tabs: TabProps[], backgroundColor: string, handleClick: (index: number) => void }) {
    const activeIndex = useSharedValue(0);

    const indicatorPosition = useDerivedValue(() => {
        return withTiming(activeIndex.value * tabWidth + tabWidth / 2, {
            duration: 500,
        });
    });

    const indicatorStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: indicatorPosition.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.tabs, indicatorStyle]}>
                {tabs.map((tab, index) => (
                    <ActiveIcon
                        index={index}
                        activeIndex={activeIndex}
                        item={tab.item}
                        width={tabWidth}
                        key={`fg-${index}`}
                    />
                ))}
                <Svg width={tabWidth * 2} height={64}>
                    <Path fill={backgroundColor} {...{ d }} />
                </Svg>
            </Animated.View>
            {tabs.map((tab, index) => {
                const position = tabWidth * index + tabWidth / 2;
                return (
                    <TabButton
                        index={index}
                        activeIndex={activeIndex}
                        item={tab.item}
                        width={tabWidth}
                        indicatorPosition={indicatorPosition}
                        position={position}
                        handleClick={handleClick}
                        key={`bg-${index}`}
                    />
                );
            })}
        </View>
    );
}

const tabBarStyles = StyleSheet.create({
    container: {
        width,
        height: 64,
        flex: 1,
    },
});



export default function TabBar({ tabs, backGroundColor = 'black', onTabChange }: TabBarProps) {
    if (!tabs) return null;
    return (
        <View style={[tabBarStyles.container, { backgroundColor: backGroundColor }]}>
            <Bar tabs={tabs} backgroundColor={backGroundColor} handleClick={onTabChange} />
        </View>
    );
}