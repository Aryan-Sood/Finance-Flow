import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {

  

  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
    description: defaultValues ? defaultValues.description : ''
  });


  function inputChangeHandler(inputIdentifier, enteredValue){
    setInputValues((currInputValues)=>{
      return {
        ...currInputValues,
        [inputIdentifier]:enteredValue
      }
    });
  }

  function submitHandler(){
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    onSubmit(expenseData);
  }

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input style={styles.rowInput} label='Amount' textInputConfig={{
          keyboardType:'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount
        }} />
        <Input style={styles.rowInput} label='Date' textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date
        }} />
      </View>
        <Input label='Description' textInputConfig={{
          multiline: true,
          autoCorrect:false,
          autoCapitalize: 'sentences',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description
        }}/>
        <View style={styles.buttons}>
        <Button style={styles.buttonStyles} mode='flat' onPress={onCancel} title='Cancel'/>
        <Button style={styles.buttonStyles} onPress={submitHandler} title={submitButtonLabel}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputsRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  rowInput:{
    flex:1,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
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