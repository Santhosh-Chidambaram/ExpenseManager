import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import {Header,Button} from 'react-native-elements'
import BudgetProgress from './BudgetProgress'
import {secondary,primary} from '../Colors'
import ExpenseList from './ExpenseList'
import Icon from 'react-native-vector-icons/FontAwesome';
import AddExpenseItem from './AddExpenseItem'
import {connect} from 'react-redux'
import AddFAB from './AddFAB'
import EditExpenseItem from './EditExpenseItem'

// import {setBudgetAmount} from '../actions/expenseActions'


const ExpenseManager = ({expenseState:{current,expenselist}}) => {
    const [state, setState] = React.useState({
        editVisible:false,
        addVisible:false,
        spend_on:'',
        spend_amount:0,
      
    });


    


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={primary}/>
            <Header
            backgroundColor={primary}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Expense Manager', style: { color: '#fff',fontSize:20 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />

            
            <BudgetProgress/>

            <ExpenseList state={state} setState={setState}/>

            <AddFAB setState={setState} state={state} />

            {
                state.editVisible?
                <EditExpenseItem state={state} setState={setState}/>:
                <AddExpenseItem state={state} setState={setState} />

            }
           
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        expenseState:state.expenseState
    }
}



export default connect(mapStateToProps)(ExpenseManager);

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

})
