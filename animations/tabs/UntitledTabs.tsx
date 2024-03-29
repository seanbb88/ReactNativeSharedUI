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
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import { UNTITLED_TAB_COUNT } from '../../constants';
import { TabButton } from './TabButton';
import { ActiveIconProps, TabBarProps, TabProps } from './NowPlayingTabs';

const { width } = Dimensions.get('window');


const tabWidth = width / UNTITLED_TAB_COUNT;

const getPath = () => {
    const tab = shape.line().curve(shape.curveBasis)([
        [0, 0],
        [tabWidth / 4, 0],
        [tabWidth / 2, 8],
        [tabWidth, 99],
        [(tabWidth / 2) * 3, 10],
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
        height: 80,
    },
    tabs: {
        position: 'absolute',
        left: -tabWidth,
    },
    activeIcon: {
        backgroundColor: 'white',
        width: 42,
        height: 42,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        position: 'absolute',
        width: tabWidth,
        top: -8,
        left: tabWidth / 2,
        height: 78,
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
                {item}
            </View>
        </Animated.View>
    );
}

function Bar({ tabs, backgroundColor, handleClick, activeRoute }: { tabs: TabProps[]; backgroundColor: string; handleClick: (index: number) => void; activeRoute: string }) {
    const initialActiveIndex = tabs.findIndex(tab => tab.name === activeRoute);
    const activeIndex = useSharedValue(initialActiveIndex);

    React.useEffect(() => {
        const newIndex = tabs.findIndex(tab => tab.name === activeRoute);
        activeIndex.value = newIndex;
    }, [activeRoute, tabs]);

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
                <Svg width={tabWidth * 2} height={80}>
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
        height: 75,
        flex: 1,
    },
    dummyPusher: {
        flex: 1,
        height: 300,
    },
});

export default function UntitledTabBar({ tabs, backGroundColor = 'black', onTabChange, activeRoute }: TabBarProps) {
    if (!tabs) return null;
    return (
        <View style={[tabBarStyles.container, { backgroundColor: backGroundColor }]}>
            <View style={tabBarStyles.dummyPusher} />
            <Bar tabs={tabs} backgroundColor={backGroundColor} handleClick={onTabChange} activeRoute={activeRoute} />
        </View>
    );
}
