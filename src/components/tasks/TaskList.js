import React from 'react';
import { FlatList, View, Text } from 'react-native';
import TaskComponent from './TaskComponent';
import taskListStyles from '../../styles/components/taskListStyles';

const TaskList = ({ tasks, onToggleComplete, onDelete, showHeader = true, isCompleted = false }) => {
  const renderTask = ({ item }) => (
    <TaskComponent
      task={item}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
      isCompleted={isCompleted}
    />
  );

  if (tasks.length === 0 && showHeader) {
    return (
      <View style={taskListStyles.emptyContainer}>
        <Text style={taskListStyles.emptyText}>No tasks yet!</Text>
        <Text style={taskListStyles.emptySubtext}>Add a task to get started</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      style={taskListStyles.list}
      showsVerticalScrollIndicator={false}
      scrollEnabled={tasks.length > 0}
    />
  );
};

export default TaskList;