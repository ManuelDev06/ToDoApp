import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';
import {styles as stylesCreate} from '../theme/createTheme'

import { useDispatch, useSelector } from 'react-redux';

import { createTask } from '../actions/taskActions';
import store from '../store';


const CreateScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')

  const dispatch = useDispatch();

 
  const addNewTask = () => {
    const task = {
      name,
      description,
      state: 'process'
  }
    store.dispatch(createTask(task));
    setName('');
    setDescription('');
  }
  
  
  return (
    <View style={styles.container}>
      <View style={stylesCreate.inputContainer}>
        <Text style={stylesCreate.textInput}>Task Name</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          style={stylesCreate.input}
        />
      </View>
      <View style={stylesCreate.inputContainer}>
        <Text style={stylesCreate.textInput}>Description</Text>
        <TextInput
          onChangeText={setDescription}
          value={description}
          style={stylesCreate.input}
        />
      </View>
        <TouchableOpacity 
          style={stylesCreate.button}
          onPress={addNewTask}  
        >
          <Text style={stylesCreate.buttonText}>Add</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CreateScreen