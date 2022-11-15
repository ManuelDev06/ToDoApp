import React, {useEffect} from 'react'
import {ScrollView, Text, View } from 'react-native'
import { ItemScroll } from '../components/ItemScroll';
import { styles } from '../theme/appTheme';

import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from '../actions/taskActions';
import { useFocusEffect } from '@react-navigation/native';
import store from '../store';


interface PropsTask {
  id:number,
  name: string,
  description: string
}

const DoneScreen = () => {
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(()=>{
      const tasksGet = () => store.dispatch(getTasks("done"));
      tasksGet();
    },[]))

  const tasks = useSelector((state:any) => state.tasks.filtered);
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Task List</Text>
        <ScrollView style={styles.title}>
          {tasks.map((value: PropsTask) => (
            <ItemScroll
              key={value.id}
              name={value.name}
              description={value.description}
              isDone
            />
          ))}
        </ScrollView>
    </View>
  )
}

export default DoneScreen