import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Overlay,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux'
import {  saveExpenseItem} from '../actions/expenseActions';

const EditExpenseItem = ({expenseState:{current},setState,state,saveItem}) => {
  
  useEffect(() =>{
        setState({
            ...state,
            spend_on:current.name,
            spend_amount:current.amount
        })
  },[])  

  return (
    <View>
      <Overlay

        isVisible={state.editVisible}
        windowBackgroundColor="rgb(255, 255, 255)"
        overlayBackgroundColor="red"
        onBackdropPress={() =>{
            setState({...state,
                editVisible:false,
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
         
          saveItem(state,current.key)
          setState({
            ...state,
            editVisible:false,
            spend_on:'',
            spend_amount:0
          });
        }}
        icon={
            <Icon name="check" size={20} color="white" style={{paddingRight:10}}/>

        }
        title="Save"
        />
        </>    
        
        
      </Overlay>
    </View>
  );
};
const mapStateToProps = (state) =>{
    return{
        expenseState:state.expenseState
    }
}


function mapDispatchToProps(dispatch){
    return{

        saveItem:(item,id) => dispatch(saveExpenseItem(item,id))
       
}
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpenseItem);
const styles = StyleSheet.create({});
