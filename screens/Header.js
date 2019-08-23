import React from 'react';
import {Text, View} from 'react-native';


const Header = ({album})=>{
    return(
        <View style={Styles.headerStyle}>
            <Text>{album}</Text>
        </View>
    )
}




const Styles = {
    headerStyle:{
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        height: 30,
    }
}

export default Header;