import { FlatList, Text } from "react-native";
import ExpenseItem from '../../components/Expenses Output/ExpenseItem';

function renderExpenseItem(itemData){
    return (
      <ExpenseItem {...itemData.item} />  
    );
}


function ExpensesList({expenses}){
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id}/>
    );
}


export default ExpensesList