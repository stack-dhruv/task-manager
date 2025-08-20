import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import taskComponentStyles from '../../styles/components/taskComponentStyles';

const TaskComponent = ({ task, onToggleComplete, onDelete, isCompleted }) => {
  return (
    <View style={[
      taskComponentStyles.taskContainer,
      isCompleted && taskComponentStyles.taskContainerCompleted
    ]}>
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
          <View style={taskComponentStyles.taskTextContainer}>
            <Text style={[
              taskComponentStyles.taskTitle,
              task.completed && taskComponentStyles.taskTitleCompleted
            ]}>
              {task.title || task.description}
            </Text>
            {task.description && task.title && (
              <Text style={[
                taskComponentStyles.taskDescription,
                task.completed && taskComponentStyles.taskDescriptionCompleted
              ]}>
                {task.description}
              </Text>
            )}
          </View>
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