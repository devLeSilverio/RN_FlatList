import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function(props){
    return(
      <View>
        <Text>Nome: {this.props.data.name}</Text>
      </View>
    );
}