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
import {Button, DeckSwiper,Card, CardItem, Thumbnail,Left, Body, Icon} from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../assets/images/i.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../assets/images/ii.jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../assets/images/iii.jpg'),
  },

];

export default function ImageViewer(props) {
  return (
  
          <View style={styles.Slider}>
          <DeckSwiper
          dataSource={cards}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>Album</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          }
          />
</View>
  );
}


const styles = StyleSheet.create({
  
    Slider:{
      width:'90%',
      height:500,
      display:'flex',
      alignContent:'center'
    },
  
   
  });