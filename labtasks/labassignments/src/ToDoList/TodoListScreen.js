import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React Native', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox value={todo.completed} onValueChange={() => toggleTodo(todo.id)} />
          <Text style={{ marginLeft: 8, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.title}</Text>
        </View>
      ))}
      <Button title="Add Todo" onPress={() => navigation.navigate('AddTodo')} />
    </View>
  );
};

export default TodoListScreen;
