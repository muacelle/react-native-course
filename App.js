import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [goalsList, setGoalsList] = useState([])

  function inputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }

  function addGoalHandler() {
    setGoalsList((currentList) => [...currentList, {text: enteredGoal, key: Math.random().toString()}])
  }

  return (
    <View style={styles.container}>

      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={inputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>

      <View style={styles.list}>
        <FlatList data={goalsList} renderItem={(items) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{items.item.text}</Text>
            </View>
          )
        }}/> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  list: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#1e9acc',
  },
  goalText: {
    color: 'white'
  }
});
