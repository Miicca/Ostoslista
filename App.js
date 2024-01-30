import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const ShoppingListApp = () => {
  const [newItem, setNewItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItemToList = () => {
    if (newItem.trim() !== '') {
      setShoppingList([...shoppingList, newItem]);
      setNewItem('');
    }
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ostoslista</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={addItemToList} />
        <Button title="Clear" onPress={clearList} />
      </View>

      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ShoppingListApp;