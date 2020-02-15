import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import MEALS from './enums/MEALS'
import Item from './components/Item';
import CreateItemModal from './components/CreateItemModal';


export default function App() {
  const [mealsList, setMealsList] = useState([]);
  const [isCreateMode, setIsCreateMode] = useState(false);

  const createMealItem = mealText => {
    if (!mealText) return;
    setMealsList(mealsList => [...mealsList, { key: Math.random().toString(), title: mealText }]);
    setIsCreateMode(false);
  }

  const deleteMealItem = mealKey => {
    setMealsList(mealsList => mealsList.filter(meal => meal.key !== mealKey));
  }

  const openCreateMode = () => {
    setIsCreateMode(true);
  }

  const closeCreateMode = () => {
    setIsCreateMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title={MEALS.OPEN_CREATE_MODE_BUTTON} onPress={openCreateMode} />
      <CreateItemModal
        visible={isCreateMode}
        inputPlaceholder={MEALS.INPUT_PLACEHOLDER}
        createButtonValue={MEALS.CREATE_BUTTON_VALUE}
        cancelButtonValue={MEALS.CANCEL_BUTTON_VALUE}
        onCreate={createMealItem}
        onCancel={closeCreateMode} />
        
      <FlatList
        data={mealsList}
        renderItem={meal =>
          <Item
            meal={meal.item}
            onDelete={deleteMealItem} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
});