import { FlatList, StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "@/constants/Colors";





function ExpensesOutput({expenses, expensesPeriod}){
    
    return (
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </View>
    );
    
}

export default ExpensesOutput

