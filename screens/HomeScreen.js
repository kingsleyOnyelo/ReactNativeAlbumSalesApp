import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';




export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <Header album={"Album"}/>
        <AlbumList/>          
        </View>

       
    </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
   
  },
  Slider:{
    width:'90%',
    height:500,
  },
  but:{
    width:100,
    textAlign:'center',
    alignContent:'center',
    marginTop:10,
    borderRadius: 20,
    shadowColor: '#ddd',
    
  }
 
});
