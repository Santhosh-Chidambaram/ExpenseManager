import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';
import { secondary, primary } from '../Colors';
import {Text,Button,Slider } from 'react-native-elements'
import {connect} from 'react-redux'
import {setBudgetAmount,setExpenseAmount,resetExpense} from '../actions/expenseActions'
const BudgetProgress = ({expenseState:{budget_amount,total_expense,expenselist,onEdit,current},setBudget,setExpense,resetExpenseDetails}) => {
  const [state,setState ] = useState({
    budget:0,
    showSlider:false
  })
  const [cost,setCost] = useState({
    balance:0,
    spend:0
  })

  React.useEffect(() =>{

    if(expenselist.length > 0){
        var total = 0;
        expenselist.forEach(item => {
            total= total + parseInt(item.amount);
            
        });
        setExpense(total)
        calulateBalancePercent()
    }
    else{
        resetExpenseDetails()
        setCost({
          balance:100,
          spend:0
        })
    }
    
  },[expenselist.length,onEdit])

  function calulateBalancePercent(){
    var bal = total_expense;
    var bal_percent = (bal/budget_amount)*100
    
    setCost({
      balance:(100-bal_percent).toFixed(1),
      spend:(bal_percent).toFixed(1)
    })
  }
  return (
    <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row'}}>
          <View>
          <AnimatedCircularProgress
            
            size={169}
            width={15}
            fill={parseInt(cost.balance)}
            tintColor={primary}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875"
            renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="white" />}
            >
            {() => <>
              <Text style={{color:'white',fontSize:18}}>Balance : {cost.balance}%</Text>
              <Text style={{color:'white',fontSize:18}}>Spend : {cost.spend}%</Text>
            </>}
          </AnimatedCircularProgress>
          
          {
            state.showSlider?
            <View style={{  alignItems: 'stretch', justifyContent: 'center',marginT:20}}>
            <Slider
            thumbTintColor="#2196f3"
              minimumValue={1}
              maximumValue={50000}
              minimumTrackTintColor="#2196f3"
              maximumTrackTintColor="white"
              value={state.budget}
              onValueChange={(value) => {
                
                setState({...state,budget:value})
                // setCost({
                //   ...cost,
                //   balance:value
                // })
              }}
              step={1}
            />
              

          </View>
          :null
          }
          </View>
            
            
            <View style={{flex:1/2,padding:10,marginLeft:10}}>
              {
                state.showSlider?
                <>
                <Text style={{
                  color:'white',
                  fontSize:18,
                  marginBottom:10,
                  lineHeight:30
                }}>Budget :   <Text style={{fontWeight:'bold'}}>Rs.{state.budget}</Text></Text>
                <Button
                type="solid"
                title="Set"
                onPress={() => {
                  setBudget(state.budget)
                  setState({...state,showSlider:false})
                  
                }}
              />

                </>
                

                :
                <Button
                type="solid"
                title="Set Budget"
                onPress={() => {
                  
                  setState({...state,showSlider:true})
                  
                }}
              />
              }

              
              
            </View>
        </View>

        <View style={styles.card}>

        <View style={styles.row}>
                <View style={{flex:1}}>
                    <Text style={styles.sideText}>Total Budget </Text>
                    
                </View>

                <Text style={styles.coln}>:</Text>
                
                <View style={{flex:1,flexBasis:1}}>
                    <Text style={styles.costText}>Rs.{budget_amount}</Text>
                </View>

            </View>
            <View style={styles.row}>
                <View style={{flex:1}}>
                    <Text style={styles.sideText}>Spend Amount  </Text>
                </View>

                <Text style={styles.coln}>:</Text>
                
                <View style={{flex:1,flexBasis:1}}>
                    <Text style={styles.costText}>Rs.{total_expense}</Text>
                </View>

            </View>
            <View style={styles.row}>
                <View style={{flex:1,}}>
                    <Text style={styles.sideText}>Balance Amount </Text>
                </View>

                <Text style={styles.coln}>:</Text>
                
                <View style={{flex:1,flexBasis:1}}>
                    <Text style={styles.costText}>Rs.{budget_amount-total_expense}</Text>
                </View>

            </View>

            
                     
                
  
        </View>

    </View>
  );
};

const mapStateToProps = (state) =>{
    return{
        expenseState:state.expenseState
    }
}

const mapDispatchToProps = dispatch =>{
    return{
          setBudget:(amt) => dispatch(setBudgetAmount(amt) ),
          setExpense:(amt) =>dispatch(setExpenseAmount(amt)) ,
          resetExpenseDetails:() =>dispatch(resetExpense()) ,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BudgetProgress);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    // borderBottomWidth:2,
    // borderBottomColor:'white',
  

  },
  sideText:{
    color:'#f80759',
      
      fontSize:20,
      fontWeight:'bold'
    
  },
  costText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
 
  
},
  card:{
    
    flex:1,
    flexDirection:'column',
    padding:30,
    marginTop:100,
    alignItems:'stretch',
    width:Dimensions.get('screen').width

    

  },
  coln:{
    color:'white',
    fontSize:19,
    paddingRight:10,
    paddingLeft:10
  },
  row:{
 
    height:45,
    flexDirection:'row',
    marginBottom:1,
    

  }
});
