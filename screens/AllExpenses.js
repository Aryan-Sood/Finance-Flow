import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'
import { GlobalStyles } from '@/constants/Colors'

export default function AllExpenses() {
  return (<View style={styles.container}>
    <ExpensesOutput expensesPeriod='Total' />
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