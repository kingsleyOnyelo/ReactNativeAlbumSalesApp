import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/About';
import ImageViewerScreen from '../screens/ImageViewer';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NavigatorStack = createStackNavigator({
  Home:{screen: HomeScreen},
  About:{screen: AboutScreen},
  ImageViewer:{screen:ImageViewerScreen}
});

export default NavigatorStack;
