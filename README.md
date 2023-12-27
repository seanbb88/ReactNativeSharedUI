# React Native Shared UI

React Native Shared UI is a collection of reusable UI components designed to streamline the development of your React Native applications. This library simplifies the process of creating consistent and stylish user interfaces across different platforms.

## Installation

To get started, you can install the package via npm:

```bash
npm install @browntreebear/reactnativesharedui
```

## Available Scripts

- **start:** Start the Expo development server.
```bash
npm start
```

- **android:** Start the Expo development server in Android.
```bash
npm run android
```

- **ios:** Start the Expo development server in ios.
```bash
npm run ios
```

- **web:** Start the Expo development server on the web.
```bash
npm run web
```

- **type-check:** Run typescript check.
```bash
npm run type-check
```

## Available Components

- **Buttons:**.
```bash
import { AppButton } from '@browntreebear/reactnativesharedui/components'

<AppButton 
    optionalStyling={{ alignSelf: 'center' }}  // <- Some optional styling you can send to the button
    text="Logout" // <- Button Text
    onPress={() => {}} // <- Button action
    buttonStyle={{ backGroundColor: "#255433", textColor: "#E0E0E0" }} // <- button style
    />
```
