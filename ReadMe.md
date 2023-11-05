# APP-SCAFFOLD

A simple and flexible React Native template to kickstart your mobile app development.

## Tech Stack

Below is the list of all the packages used to create this template

| Library            | Category             | Version | Description                                    |
| ------------------ | -------------------- | ------- | ---------------------------------------------- |
| React Native       | Mobile Framework     | v0.72   | The best cross-platform mobile framework       |
| React              | UI Framework         | v18     | The most popular UI framework in the world     |
| TypeScript         | Language             | v5      | Static typechecking                            |
| React Navigation   | Navigation           | v6      | Performant and consistent navigation framework |
| Expo               | SDK                  | v49     | Allows (optional) Expo modules                 |
| Expo Font          | Custom Fonts         | v11     | Import custom fonts                            |
| Expo Status Bar    | Status Bar Library   | v1      | Status bar support                             |
| Expo Splash Screen | Splash Screen        | v0.20   | Control the behavior of native splash screen   |
| Hermes             | JS engine            |         | Fine-tuned JS engine for RN                    |
| RN Screens         | Navigation           | v3      | Expose native navigation container components  |
| RN Safe Area-CTX   | Safe Area Context    | v4      | A flexible way to handle safe area             |


## Project Structure

```
PROJECT_ROOT
├── assets               # App assets, images, fonts. etc
├── src         
│   └── components       # React components
    ├── contexts         # App contexts
    ├── hooks            # Custom hooks
    ├── language         # Languages JSON files
    ├── layouts          # Layouts components
    ├── navigation       # Navigation files
    ├── schemas          # Data types
    ├── screens          # Screens components
    ├── store            # App state and storage
    ├── themes           # Styles, Colors, and fonts
    └── utils            # Utilities module
└── App.tsx              # Root module
└── ...                  # Other configuration files

```

## Basic Features
1. Language Support
2. Theme (i.e., Dark and Light Mode)
3. Unopinionated State Management
   - We use the context API for state management, which is built into React.
   - Make your own choice for complex state management, such as Redux, MobX, etc.
4. Custom Hooks for Accessing Language and Colors
    ```
        const lang = useLanguage();
        const colors = useColors();
    ```
5. Text Components are wrapped with the AppText component for easy font property configurations.
6. App layouts contain wrapped AppLayout components for consistent configurations between screens.


##  How to Use

Follow this documentation for environment setup
- React-Native Documentation - [Expo CLI Quickstart](https://reactnative.dev/docs/environment-setup)


Clone this template to your local machine and provide a new app name or fork the template.

```
git clone https://github.com/asantaelly/app-scaffold.git <App-Name>
```

## Installation

When inside the project folder, install project dependencies

```
yarn install
```
 
Now you can start your app
 ```
 npx expo start -c
 ```

Good luck. 

## Support

- Email shoo.kevin@gmail.com

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

