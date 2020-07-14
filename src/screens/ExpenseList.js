import React, { useEffect } from 'react'
import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import {  Button } from 'react-native-elements'
import { primary } from '../Colors'
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import { deleteExpenseItem, editExpenseItem } from '../actions/expenseActions';

function ExpenseItem({item,deleteItem,editItem,state,setState}){
    return(
        <View  style={styles.item}>

                            <View style={styles.round}>
                                <FIcon
                                    name="rupee"
                                    size={20}
                                    color="white"
                            
                                />

                            </View>
                            
                            <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>Rs.{item.amount}</Text>
                            
                            </View>

                            <View>
                                <Button
                                onPress={() => {
                                    setState({
                                        ...state,
                                        editVisible:true,
                                       
                                    })
                                    editItem(item)
                                }}
                                buttonStyle={{
                                    marginLeft:10,
                                    backgroundColor:'#f6f6f6'
                                }}
                                icon={<MIcon
                                    name="edit"
                                    size={10}
                                    color="black"
                            
                                    />}
                                />  
                            </View>
                            
                            
                            <View style={{
                                position:'absolute',
                                right:0,
                                top:10
                                
                            }}> 
                            <Button
                            onPress={() => deleteItem(item.key)}
                            buttonStyle={{
                                
                                backgroundColor:'red'
                            }}
                            icon={
                                <MIcon
                                name="delete"
                                size={15}
                                color="white"
                          
                                />
                            }
                            />
                            

                            </View>
                           
                        </View>
    )
}


const ExpenseList = ({expenseState:{expenselist},deleteItem,editItem,state,setState}) => {

    return (
        <View style={styles.container}>
 
                <Text style={styles.exp}>My Expenses : </Text>
                    <View
                    style={styles.card} >
                    {
                        (expenselist != null && expenselist != '')?
                        <FlatList 
                        data={expenselist}
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({item}) =>
                         <ExpenseItem item={item}  
                         deleteItem={deleteItem} 
                         editItem={editItem}
                         state={state} setState={setState} 
                         
                         />}
                        ListFooterComponent={() =>(
                            <View style={{marginBottom:50}}>

                            </View>
                        )}
                        />
                        :
                        <Text style={[styles.name,{textAlign:'center'}]}>No Expenses </Text>
                    }
                    

                   
                    
                    </View>
    
           
        </View>
    )
}

function mapStateToProps(state){
    return{

        expenseState:state.expenseState

    }
}

function mapDispatchToProps(dispatch){
    return{
    
        deleteItem:(key) => dispatch(deleteExpenseItem(key)),
        editItem:(item) => dispatch(editExpenseItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseList)

const styles = StyleSheet.create({
    container:{
        flex:1,
    
    },
    exp:{
        color:'white',
        fontSize:20,
        paddingTop:10,
        paddingLeft:20
    },
    name:{
        color:'white',
        fontSize:20,
        marginBottom:5
    },
    item:{
        padding:10,
        flexDirection:'row',
        borderBottomColor:'#2196f3',
        borderBottomWidth:2,
    },
    card:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding:20
    },
    round:{
        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2196f3',
        borderRadius:50,
        width:50,
        height:50,
        marginRight:30
    }
})
