import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import TaskComponent from './TaskComponent';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  const renderTask = ({ item }) => (
    <TaskComponent
      task={item}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
    />
  );

  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks yet!</Text>
        <Text style={styles.emptySubtext}>Add a task to get started</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default TaskList;