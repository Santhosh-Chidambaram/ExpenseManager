import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
const AddFAB = ({setState,state}) => {
    return (
        <View style={styles.fab}>
            <Button
            onPress={() =>{setState({...state,addVisible:true})}}
            type="solid"
            buttonStyle={{
                borderRadius:25,
                borderWidth:2,
                padding:10
            }}
            containerStyle={{
                width:150,
                
            }}
            
           
            icon={
                    <Icon
                      name="plus"
                      size={20}
                      color="white"
                      style={{
                          paddingRight:5,
                      }}
                    />
                  }
                  
                title="Add Expenses"
                titleStyle={{
                    fontSize:18
                }}
                />
            </View>
    )
}

export default AddFAB

const styles = StyleSheet.create({
    fab:{
        position:'absolute',
        bottom:25,
        right:15,
    }
})
