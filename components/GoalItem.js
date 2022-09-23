import { Text, StyleSheet, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={() => {
        props.onDeleteGoal(props.id);
      }}
    >
      <Text style={styles.goalItem}>{props.item}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#5e9",
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});
