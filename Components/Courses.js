import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function Courses(props){
    return(
    <>
      <View style={styles.view}>
         <Text style={styles.title}>{props.data.name}</Text>
         <Image style={styles.img} source={{uri: props.data.img}}/>
          <Button style={styles.button}  title="Inscrever"/>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
 img:{
   width:200,
   height:80,
   borderWidth:1,
   borderColor:'#000000',
   marginBottom:10,
 },
 view:{
   flexDirection:'column',
    marginLeft:20,
    marginBottom:20,
    width:'80%',
    alignItems: 'center'
 },
 title:{
   fontSize:20,
   fontWeight:'bold',
 }
});
