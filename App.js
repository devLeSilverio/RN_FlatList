import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';
import Courses from './Components/Courses';
export default class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      data:[
        {id:'1',  name:'JavaScript Avançado', description:'curso técnico de programação', img:'https://usefulangle.com/img/thumb/javascript.png'},
        {id:'2',  name:'Inglês', description:'curso de idiomas', img:'https://www.simec.com.br/media/img_noticias/Dicas-para-melhorar-o-ingles-1-750x500.jpeg'},
        {id:'3',  name:'Java Intermediário', description:'curso técnico de programação', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySvob146hPZnE-pQ4wAhas_8bG_NCG7hQxn3I6vr4nU4g492QVG2CVnyZp7FuxN3aId0&usqp=CAU'},
        {id:'4',  name:'Alemão', description:'curso de idiomas', img:'http://3.bp.blogspot.com/-MaBMM11qYHM/V2UCIgFRGHI/AAAAAAAAk88/szaPWSqqllceGYPi8QQ4sq22d8ghMEsFgCK4B/s1600/ich_lerne_deutsch.png'},
        {id:'5',  name:'Python Básico', description:'curso técnico de programação', img:'https://img.olhardigital.com.br/wp-content/uploads/2020/04/20200423030657-1131x450.jpg'},
      ]
    }
  }

  render(){
    return (
      <ScrollView>
     <View style={styles.container}>
        <Text style={styles.text1}>Cursos</Text>
        <FlatList
          vertical
          data={this.state.data}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=><Courses data={item} />}
        />
      </View>
      </ScrollView>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
     marginTop:40,
  },
  text1: {
    fontSize:40,
    textAlign: 'center',
    backgroundColor:'#DEC5C5',
    marginBottom:20,
  }
});
