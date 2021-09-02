import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Courses from './Components/Courses';

export default class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      data:[
        {id:'1',  name:'JavaScript Avançado', description:'curso técnico de programação', img:''},
        {id:'2',  name:'Inglês', description:'curso de idiomas', img:''},
        {id:'3',  name:'Java Intermediário', description:'curso técnico de programação', img:''},
        {id:'4',  name:'Alemão', description:'curso de idiomas', img:''},
        {id:'5',  name:'Python Básico', description:'curso técnico de programação', img:''},
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=><NameCourse data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
