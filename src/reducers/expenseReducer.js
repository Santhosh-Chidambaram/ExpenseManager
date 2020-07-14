import {ADD_ITEM,EDIT_ITEM,DELETE_ITEM,SAVE_ITEM,
    SET_BUDGET, SET_EXPENSE,RESET_EXPENSE} from '../actions/types'
import { act } from 'react-test-renderer'

const initialState = {
    expenselist:[],
    onEdit:false,
    current:'',
    total_expense:0,
    budget_amount:0,

}


const expenseReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case SET_BUDGET:
            
            return{
                ...state,
                budget_amount:action.payload
            }

        case ADD_ITEM:
            return{
                ...state,
                expenselist:[...state.expenselist,action.payload],
                
            }
           

        case EDIT_ITEM:
            return{
                ...state,
                current:action.payload
            }

        case SAVE_ITEM:
            return{
                    ...state,
                    onEdit:!state.onEdit,
                    current:'',
                    expenselist:state.expenselist.map(obj =>{
                        if(obj.key == action.payload.key){
                            obj.name = action.payload.name;
                            obj.amount = action.payload.amount;
                            return obj
                        }else{
                            return obj
                        }
                    })

                }
            
        case DELETE_ITEM:{
            return{
                ...state,
                expenselist:state.expenselist.filter(item => item.key != action.payload)
            }
        }
        case SET_EXPENSE:{
            return{
                ...state,
                total_expense:action.payload
            }
        }
        case RESET_EXPENSE:{
            return{
                ...state,
                current:'',
                total_expense:0,
            }
        }
        default:
            return state


    }

}

export default expenseReducer;