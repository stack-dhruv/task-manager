import React from 'react';
import { FlatList } from 'react-native';
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