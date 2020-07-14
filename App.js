import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import ExpenseManager from './src/screens/ExpenseManager';

const App = () => {
  return (
      <View style={styles.container}>
          <ExpenseManager />
      </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#060c21'
  }
})