# React Native Shared UI

React Native Shared UI is a collection of reusable UI components designed to streamline the development of your React Native applications. This library simplifies the process of creating consistent and stylish user interfaces across different platforms.

## Installation

To get started, you can install the package via npm:

```bash
npm install @browntreebear/reactnativesharedui
```

NOTE: any component used from the folder /animations (such as TabBar) has a react-native-gesture-handler dependency. 
You must wrap your overall application in the GestureHandlerRootView in order to have the animations work properly. 
React Native Gesture Handler -> [documentation](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)


## Available Scripts

- **start:** Start the Expo development server.
```bash
npm start
```

- **ios:** Start the Expo development server in ios.
```bash
npm run ios
```

- **type-check:** Run typescript check.
```bash
npm run type-check
```


## Components (Non Animated)

-**Buttons**
```bash
import { AppButton } from '@browntreebear/reactnativesharedui/components'

<AppButton 
    // Some optional styling you can send to the button
    optionalStyling={{ alignSelf: 'center' }}  
    text="Logout" // <- Button Text
    onPress={() => {}} // <- Button action
    buttonStyle={{ backGroundColor: "#255433", textColor: "#E0E0E0" }}
/>
```

-**Loaders**
```bash
import { FullScreenLoader, ApplicationLoader, PageLoader } 
from '@browntreebear/reactnativesharedui/components'

<ApplicationLoader/>
<PageLoader loaderColor="white"/>
<FullScreenLoader loaderColor="grey" visible={true}/>
```


## Components (Animated)
Note: Application must be wrapped in <GestureHandlerRootView/> from the 'react-native-gesture-handler' package
listed above in order to use these components

-**TabBar**
- note: this was built with routing built on @react-navigation/native
    -make sure content above (each tab) the nav bar has a style of flex: 1 to push the navbar to the bottom of the page

```bash
import { TabBar } 
from '@browntreebear/reactnativesharedui/animations'

const tabs = [
    {
        name: 'Home',
        item: Any React node icon works here. . I use Iconicons,
    },
    {
        name: 'MyList',
        item: <Iconicons color="black" size={25} name="list-outline" />,
    },
    {
        name: 'Settings',
        item: <Iconicons color="black" size={25} name="people-outline" />,
    }

<NavigationContent>
    <View style={{ flex: 1 }}>
        {state.routes.map((route, i) => {
            const isHidden = shouldHideTabBar(route.name);
            const isCurrentTab = i === state.index;
                return (
                    <View
                        key={route.key}
                        style={[
                            StyleSheet.absoluteFill,
                        { display: isHidden ? 'none' : 'flex' },
                        { zIndex: isCurrentTab ? 1 : 0 },
                    ]}
                    >
                    {isCurrentTab && descriptors[route.key].render()}
                </View>
            )
        })}
    </View>
    <View style={styles.tabBar}>
        <TabBar 
            tabs={tabs} 
            onTabChange={handleTabNavigation} 
            backGroundColor="#10001A" 
        />
    </View>
</NavigationContent>
```

![Tab Navigation Component](./assets/demo/tab_demo.gif)


-**FadeView**
-this just fades in and out the child component (for the duration set)

```bash
import { FadeView } from '@browntreebear/reactnativesharedui/animations'

<FadeView duration={1200}>
    <Text>Fadin in and out babbey</Text>
</FadeView> 
```

-**AnimatedInput**
-this input animates the placeholder above the text input when the user selects

```bash
import { AnimatedInput } from '@browntreebear/reactnativesharedui/animations'

<AnimatedInput
    placeholder='Enter your password'
    value={inputValue}
    inputColor="black"
    optionalStyling={{ marginTop: 8 }}
    obviscateText={true}
    onChangeText={(text) => setInputValue(text)}
/>
```

![Animated Input Component](./assets/demo/animated_input_demo.gif)


    