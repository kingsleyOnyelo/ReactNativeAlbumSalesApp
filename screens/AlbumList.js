import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Axios from 'axios';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
    constructor(props){
      super(props);
      this.state={
        albums:[],
        }
    }


    
async componentWillMount(){
    const AlbumDetails = await Axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    this.setState({albums: AlbumDetails.data});
}


renderAlbums = ()=>{
   return this.state.albums.map((album)=> <AlbumDetails key={album.title} album={album}/>
       )
}
    render(){
        return(
            <View style={{width:'100%'}}>
               {this.renderAlbums()}
            </View>
        )
    }
 
}


export default AlbumList;

