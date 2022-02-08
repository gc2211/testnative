import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 446534,
      text: "Buy cheese"
    },
    {
      id: 456454,
      text: "Buy wine"
    },
    {
      id: 131234,
      text: "Buy apple"
    },
    {
      id: 498753,
      text: "Buy crackers"
    },
    {
      id: 324684,
      text: "Buy nuts"
    }
  ])

  const deleteHandler = (id) => {
    setTodos(prevValue => prevValue.filter(item => item.id !== id))
  };

  const addNewTodoHandler = () => {
    setTodos(prevValue => [...prevValue, {id: Math.random(), text: newTodo}]);
    setNewTodo("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
        <Button
          title="increment"
          onPress={() => setCount(prevValue => prevValue + 1)}
        />
        <Button
          title="decrement"
          onPress={() => setCount(prevValue => prevValue - 1)}
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.containerBig}>

        <TextInput
          placeholder="enter a new todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button
          title="add"
          onPress={addNewTodoHandler}
        />
        
        <FlatList
          data={todos}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.list}>{item.text}</Text>
                <Button
                  title="❌"
                  onPress={() => deleteHandler(item.id)}
                />
              </View>
            )
          }}
          keyExtractor={item => item.id}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBig: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  list: {
    fontSize: 20
  },
  listItem: {
    flexDirection: 'row'
  }
});