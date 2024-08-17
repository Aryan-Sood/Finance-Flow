import { FlatList, StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "@/constants/Colors";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-08-17')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-08-10')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-08-14')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-07-15')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-08-04')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-08-17')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-08-10')
    },
    {
        id: 'e8',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-08-14')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-07-15')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-08-04')
    },
    {
        id: 'e11',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-08-17')
    },
    {
        id: 'e12',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-08-10')
    },
    {
        id: 'e13',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-08-14')
    },
    {
        id: 'e14',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-07-15')
    },
    {
        id: 'e15',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-08-04')
    }
]


function ExpensesOutput({expenses, expensesPeriod}){
    
    return (
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
    
}

export default ExpensesOutput

