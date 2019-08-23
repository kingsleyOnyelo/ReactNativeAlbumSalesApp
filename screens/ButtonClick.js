import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const ButtonClick = (props)=>{
    const{buttonStyles, textStlye} = styles;
    return(
        <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
        <Text style={textStlye}>Buy Now</Text>
        </TouchableOpacity>
    )
}


const styles = {
    buttonStyles:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#007aff',
        marginLeft:5,
    },
    textStlye:{
        alignSelf:'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop:10,
        paddingBottom: 10
    }
}
export default ButtonClick;