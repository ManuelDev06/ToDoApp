import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { stylesProcess } from '../theme/processTheme';
import { doneTask } from '../actions/taskActions';
import store from '../store';


interface Props {
  id?:number,
  name: string,
  description: string,
  isDone: boolean
}

export const ItemScroll = ({id,name,description,isDone}:Props) => {

  const editTask = () => {
    const done = () => store.dispatch(doneTask(id))
    done();
  }


  return (
    <View style={stylesProcess.container}>
        <View style={stylesProcess.content}>
            <Text style={stylesProcess.title}>{name}</Text>
            <Text style={stylesProcess.description}>{description}</Text>
        </View>
        {!isDone
          ?<TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => editTask()}
           >
              <View  style={stylesProcess.button}>
                  <Text style={stylesProcess.buttonTitle}>Done</Text>
              </View>
          </TouchableOpacity>
          :null
        }
    </View>
  )
}
