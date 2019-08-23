import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
<ScrollView>
    
    <View>
    <Text onPress={()=>props.navigation.navigate('Home')}>HomePage</Text>
  </View>
  <ExpoConfigView />;
  </ScrollView>
  )
  
}

SettingsScreen.navigationOptions = {
  header: null
};
