/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = 'rgba(255, 0, 0, 0.5)';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    backgroundHeader: 'rgb(242, 242, 242)',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#2b2a33',
    backgroundHeader: '#101218',
    tint: tintColorDark,
    icon: '#ff0000',
    tabIconDefault: 'rgba(255, 0, 0, 0.37)',
    tabIconSelected: tintColorDark,
  },
};
