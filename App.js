import React, { useState } from "react";
import _ from "lodash";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    { title: "get food", key: 1 },
    { title: "make todo list", key: 2 },
    { title: "eat", key: 3 },
  ]);

  const renderTodoList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setTodo(_.filter(todo, (n) => n.key !== item.key))}
      >
        <View>
          <Text>
            title: {item.title} {"    "}key: {item.key}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleTodoPress = () => {
    setTodo([
      { title: text, key: _.reverse(_.sortBy(todo, ["key"]))[0].key + 1 },
      ...todo,
    ]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Todo App</Text>
      </View>
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setText(text)}
          placeholder="Enter value here"
          value={text}
        />
        <Button
          onPress={handleTodoPress}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View>
        <FlatList
          data={todo}
          renderItem={renderTodoList}
          keyExtractor={(item) => item.key.toString()}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
