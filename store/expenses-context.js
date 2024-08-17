import { createContext, useReducer } from "react";


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
        date: new Date('2024-08-14')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-08-12')
    },
    {
        id: 'e8',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-08-11')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-07-10')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-08-17')
    },
    {
        id: 'e11',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-08-17')
    },
]

export const ExpenseContext = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpenseL:(id, {description, amount, date})=>{}
});


function expensesReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.find((expense)=> expense.id === action.payload.id);
            const updatableExpenses = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpenses, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatableExpenses;
        case 'DELETE':
            return state.filter((expense)=> expense.id !==action.payload)
        default:
            return state
    }
}

function ExpenseContextProvider({children}){

    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);  // set dummy expenses as default initial value


    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload:id});
    }

    function updateExpense(id, expenseData){
        dispatch({type:'UPDATE', payload: {id:id, data: expenseData}});
    }


    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    };

    return (
        <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
    );
}

export default  ExpenseContextProvider;