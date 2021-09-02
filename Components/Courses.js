import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Courses(props){
    return(
      <View style={styles.view}>
        <Text style={styles.title}>{props.data.name}</Text>
        <Image style={styles.img} source={{uri: props.data.img}}/>
      </View>
    );
}

const styles = StyleSheet.create({
 img:{
   width:200,
   height:80,
   borderWidth:1,
   borderColor:'#000000'
 },
 view:{
    alignItems:'center',
    marginBottom:20,
 },
 title:{
   fontSize:20,
   fontWeight:'bold',
 }
});
