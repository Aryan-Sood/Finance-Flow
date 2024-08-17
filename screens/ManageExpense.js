import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '@/components/UI/IconButton';
import { GlobalStyles } from '@/constants/Colors';

export default function ManageExpense({route, navigation}) {

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  function deleteExpenseHandler(){ }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  },[navigation, isEditing]);

  
  return (
    <View style={styles.container}>
      
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
  }
})