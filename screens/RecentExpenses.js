import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '@/components/Expenses Output/ExpensesOutput'
import { GlobalStyles } from '@/constants/Colors'
import { useContext } from 'react'
import { ExpenseContext } from '@/store/expenses-context'
import { getDateMinusDay } from '@/utils/date'

export default function RecentExpenses() {


  const expensesCtx = useContext(ExpenseContext);
  // console.log('expensesCtx.expenses: ', expensesCtx.expenses);

  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today,7);

    return expense.date > date7DaysAgo;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallBackText='No expenses registered in last 7 days'/>
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