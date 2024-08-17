import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '@/components/UI/IconButton';
import { GlobalStyles } from '@/constants/Colors';
import Button from '../components/UI/Button';

export default function ManageExpense({route, navigation}) {

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  function deleteExpenseHandler(){
    navigation.goBack();
  }

  function cancelHandler(){
    navigation.goBack();
  }

  function confirmHandler(){
    navigation.goBack();
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  },[navigation, isEditing]);

  

  
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.buttonStyles} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.buttonStyles} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonStyles:{
    minWidth:120,
    marginHorizontal:8
  }
})