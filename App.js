import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalvisible, setIsModalVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function startGoalHandler() {
    setIsModalVisible(true);
  }
  function endGoalHandler() {
    setIsModalVisible(false);
  }
  function addGoalHandler(goal) {
    setGoalList((prevgoalList) => [...goalList, goal]);
    endGoalHandler();
  }
  function deleteGoalHandler(id) {
    setGoalList((prevgoalList) => {
      return prevgoalList.filter((_, i) => i !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startGoalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isModalvisible}
        onEndGoal={endGoalHandler}
      />
      <View style={styles.listItemDiv}>
        <Text>List of Goals....</Text>
        <FlatList
          data={goalList}
          renderItem={(dataItem) => {
            return (
              <GoalItem
                item={dataItem.item}
                id={dataItem.index}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(_, index) => {
            return index;
          }}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listItemDiv: {
    flex: 4,
  },
});
