import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/Expenses Output/ExpensesOutput'

export default function AllExpenses() {
  return (
    <ExpensesOutput expensesPeriod='Total' />
  )
}