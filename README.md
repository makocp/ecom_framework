## Description
The aim of this project, is to build an e-commerce application with a functional payment system. The focus is on the core functionalities (order process incl. payment). After this is done, additional functionalities like cart, better UI design, detailed product view, etc. can be implemented.

My personal motivation here is to learn about React Native, TypeScript and also dive deeper into e-commerce.

Also, this app can be used as "framework" for an e-commerce app. The base is already here, just a few configurations like product import, adaption of design, etc. have to be done.

## Developers
mako.codeproducer@gmail.com

Please contact me, if you have any requests or questions.

## Setup
[Setting up the Environment Setup](https://reactnative.dev/docs/environment-setup)

After the setup is done, you can start the app via executing the command in the project folder "npm run ios" for iOS or "npm run android" for Android.

## Functionalities
// TODO: Add Screenshots of finished App.

## Learnings
### Expo vs. RN CLI
I decided to use React Native CLI for this project, because it has a bit more of a steeper learning curve.
Expo on the other hand is easier to setup.

### Fixing "rnsscreen was not found in the uimanager"
Executing the following commands worked for me -> [See Stackoverflow answer](https://stackoverflow.com/a/69740887)
: \
`npm i react-native-screens` \
`npx pod-install`

### Adding Icons to iOS

- `npm install react-native-vector-icons --save`
- [Do Steps 1-5](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06)
- Create the `react-native.config.js` file -> see [official documentation](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#ios-setup)


## Commands
### Git
Reset last commit: `git reset --soft HEAD~1` 

### VS Code (Mac)
Duplicate line: SHIFT+OPTION+ARROWDOWN \
Reformat Code: SHIFT+OPTION+F

### npm
Start iOS App: `npm run ios` \
Start Android App: `npm run android`

### Xcode
Clean Build: SHIFT+COMMAND+K

## Extentions VS Code
[React Code Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Sources/References
[React Native Tutorial](https://www.youtube.com/watch?v=w5IYCoTk4Bs&t=2859s) \
[React Native Tutorial 2](https://www.youtube.com/watch?v=qcN5B44cMHQ)

[Icon Library](https://oblador.github.io/react-native-vector-icons/)
