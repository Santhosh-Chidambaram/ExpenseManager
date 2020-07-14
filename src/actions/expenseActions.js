import {ADD_ITEM,EDIT_ITEM,DELETE_ITEM,SAVE_ITEM,SET_BUDGET,SET_EXPENSE,RESET_EXPENSE} from './types'

export const setBudgetAmount= (amt) => (
    
    {
        
        type:SET_BUDGET,
        payload:amt
    }

);
    


export const addExpenseItem = (item) => (
    {
        type:ADD_ITEM,
        payload:{
            key:Math.random(),
            name:item.spend_on,
            amount:item.spend_amount,

        }
    }

);
    


export const editExpenseItem = (item) =>(
   {
        type:EDIT_ITEM,
        payload:item
    }
)

export const deleteExpenseItem = (key) =>(
    {
        type:DELETE_ITEM,
        payload:key
    }
)

export const saveExpenseItem = (item,id) =>(
    {
        type:SAVE_ITEM,
        payload:{
            key:id,
            name:item.spend_on,
            amount:item.spend_amount,

        }
    }
)

export const setExpenseAmount = (amount) =>(
    {
        type:SET_EXPENSE,
        payload:amount
    }
)
export const resetExpense = () =>(
    {
        type:RESET_EXPENSE,
    
    }
)