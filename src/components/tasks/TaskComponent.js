import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import taskComponentStyles from '../../styles/components/taskComponentStyles';

const TaskComponent = ({ task, onToggleComplete, onDelete }) => {
  return (
    <View style={taskComponentStyles.taskContainer}>
      <TouchableOpacity 
        style={taskComponentStyles.taskContent}
        onPress={() => onToggleComplete(task.id)}
        activeOpacity={0.7}
      >
        <View style={taskComponentStyles.taskInfo}>
          <View style={[
            taskComponentStyles.checkbox,
            task.completed && taskComponentStyles.checkboxCompleted
          ]}>
            {task.completed && <Text style={taskComponentStyles.checkmark}>✓</Text>}
          </View>
          <Text style={[
            taskComponentStyles.taskText,
            task.completed && taskComponentStyles.taskTextCompleted
          ]}>
            {task.description}
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={taskComponentStyles.deleteButton}
        onPress={() => onDelete(task.id)}
        activeOpacity={0.7}
      >
        <Text style={taskComponentStyles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskComponent;