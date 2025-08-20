import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { taskScreenStyles } from '../styles';

// This screen can be used for detailed task view or editing in future
const TaskScreen = ({ route }) => {
  const { task } = route?.params || {};

  return (
    <SafeAreaView style={taskScreenStyles.container}>
      <View style={taskScreenStyles.content}>
        <Text style={taskScreenStyles.title}>Task Details</Text>
        {task ? (
          <View style={taskScreenStyles.taskDetails}>
            <Text style={taskScreenStyles.taskText}>{task.description}</Text>
            <Text style={taskScreenStyles.statusText}>
              Status: {task.completed ? 'Completed' : 'Active'}
            </Text>
          </View>
        ) : (
          <Text style={taskScreenStyles.noTaskText}>No task selected</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TaskScreen;