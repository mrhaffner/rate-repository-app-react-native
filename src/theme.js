import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      secondary: '#e1e4e8',
      white: 'white',
      navigation: '#24292e',
      error: '#d73a4a',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      superheading: 18,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    defaultPadding: {
      padding: 11,
    },
  };
  
  export default theme;