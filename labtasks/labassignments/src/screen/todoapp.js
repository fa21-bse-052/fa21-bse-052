import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodoScreen = ({ navigation }) => {
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    // Implement adding todo logic here
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setTodoText(text)}
        value={todoText}
      />
      <Button title="Add Todo" onPress={addTodo} />
    </View>
  );
};

export default AddTodoScreen;
