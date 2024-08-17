import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'
import { GlobalStyles } from '@/constants/Colors'
import { useContext } from 'react'
import { ExpenseContext } from '@/store/expenses-context'

export default function AllExpenses() {

  const expensesCtx = useContext(ExpenseContext);


  return (<View style={styles.container}>
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' />
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700
}
})