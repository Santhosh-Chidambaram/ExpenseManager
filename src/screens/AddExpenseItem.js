import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Overlay,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux'
import { addExpenseItem, saveExpenseItem} from '../actions/expenseActions';

const AddExpenseItem = ({state,setState,addItem}) => {
 
  return (
    <View>
      <Overlay

        isVisible={state.addVisible}
        windowBackgroundColor="rgb(255, 255, 255)"
        overlayBackgroundColor="red"
        onBackdropPress={() =>{
            setState({...state,
                addVisible:false,
                spend_amount:0,
                spend_on:''
            })
        
        }}
        >
        <>
        <Input

          value={state.spend_on}
          onChangeText={txt => setState({...state,spend_on:txt})}
          placeholder="Spend On"
          leftIcon={<Icon name="check-square" size={24} color="black" />}
          containerStyle={{
              width:300
          }}
        />

        <Input
            keyboardType="numeric"
            value={state.spend_amount.toString() == '0' ?null:state.spend_amount.toString()}
            style={{
                width:300
            }}
            placeholder="Spend Amount"
            containerStyle={{
                width:300
            }}
          leftIcon={{type: 'font-awesome', name: 'rupee'}}
          onChangeText={txt => setState({...state,spend_amount:txt})}
        />

        <Button
        onPress={() => {
          setState({
            ...state,
            addVisible:false,
            spend_on:'',
            spend_amount:0
          })
          addItem(state)
        }}
        icon={
            <Icon name="plus" size={20} color="white" style={{paddingRight:10}}/>

        }
        title="Add"
        />
        </>    
        
        
      </Overlay>
    </View>
  );
};
function mapDispatchToProps(dispatch){
    return{
        addItem:(item) => dispatch(addExpenseItem(item)),
        saveItem:(item) => dispatch(saveExpenseItem(item))
       
}
}
export default connect(null,mapDispatchToProps)(AddExpenseItem);
const styles = StyleSheet.create({});
