import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [goalsList, setGoalsList] = useState([])

  function inputHandler(enteredText) {
    setEnteredGoal(enteredText)
  }

  function addGoalHandler() {
    setGoalsList((currentList) => [...currentList, enteredGoal])
  }

  return (
    <View style={styles.container}>

      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={inputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>

      <View style={styles.list}>
        {goalsList.map((goal) => (
        <View style={styles.goalItem} key={goal}>
          <Text style={styles.goalText}>{goal}</Text>
        </View>))}
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
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
