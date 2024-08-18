import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '@/components/UI/IconButton';
import { GlobalStyles } from '@/constants/Colors';
import Button from '../components/UI/Button';
import { ExpenseContext } from '@/store/expenses-context';
import ExpenseForm from '../components/Manage Expense/ExpenseForm';

export default function ManageExpense({route, navigation}) {

  const expenseCtx = useContext(ExpenseContext);

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpense = expenseCtx.expenses.find((expense) => expense.id === editExpenseId);
  // console.log(selectedExpense)
  function deleteExpenseHandler(){
    expenseCtx.deleteExpense(editExpenseId);
    navigation.goBack();
  }

  function cancelHandler(){
    navigation.goBack();
  }

  function confirmHandler(expenseData){
    console.log('expense data: ',expenseData)
    if(isEditing){
      expenseCtx.updateExpense(editExpenseId, selectedExpense);
    }
    else{
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  },[navigation, isEditing]);

  

  
  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler} defaultValues={selectedExpense}/>
      {isEditing && 
      <View style={styles.deleteContainer}>
      <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
      </View>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonStyles:{
    minWidth:120,
    marginHorizontal:8
  }
})