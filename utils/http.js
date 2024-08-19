import axios from "axios";

function storeExpense(expenseData){
    axios.post('https://react-native-527eb-default-rtdb.firebaseio.com/expenses.json', expenseData);
}

export async function fetchExpense(){
   const response = await axios.get('https://react-native-527eb-default-rtdb.firebaseio.com/expenses.json');

   const expenses = [];
//    console.log(response);
   for(const key in response.data){
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    };
    console.log(expenseObj);
    expenses.push(expenseObj);
   }

   return expenses;
}

export default storeExpense;