# react-native-custom-nav
Custom navigation animation for React Native

Demo video on [Youtube](https://www.youtube.com/shorts/1iXMfTJc9CU)

This react native demo uses `react-native-reanimated` for its animations, `react-navigation` for navigation setup and `expo` as the build tool

## Details
- Since this is an animation-focused setup with no further complexities, `expo` is a great choice as it can take out lots of boilerplating and env setup.
- `react-navigation` has an animated drawer component by default, this is a good starting point.
- The animation seems to have a tricky part which is the drawer appears under the page and the page seems to slide across the top. Overriding z-index seems to be the way here.
- Using the `useDrawerProgress` hook, we can sync different animations with the drawer's position.
- Using `react-native-reanimated` we can generate animated styles which is hooked into the drawer progress.
- For animating all the pages, we need a wrapper and add animated styles to it.

  
