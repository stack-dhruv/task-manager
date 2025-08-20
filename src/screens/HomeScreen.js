import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import TaskList from '../components/tasks/TaskList';
import TagList from '../components/tags/TagList';
import homeScreenStyles from '../styles/screens/homeScreenStyles';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter options
  const filterTags = ['All', 'Active', 'Completed'];

  // Add new task
  const addTask = () => {
    if (newTaskText.trim() === '') {
      Alert.alert('Error', 'Please enter a task description');
      return;
    }

    const newTask = {
      id: Date.now(),
      description: newTaskText.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  // Toggle task completion
  const toggleTaskComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Delete task
  const deleteTask = (taskId) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setTasks(tasks.filter(task => task.id !== taskId));
          }
        },
      ]
    );
  };

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (selectedFilter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  // Get task statistics
  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    return { total, completed, active };
  };

  const stats = getTaskStats();
  const filteredTasks = getFilteredTasks();

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <KeyboardAvoidingView 
        style={homeScreenStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={homeScreenStyles.header}>
          <Text style={homeScreenStyles.title}>Task Manager</Text>
          <Text style={homeScreenStyles.subtitle}>
            {stats.total} tasks • {stats.active} active • {stats.completed} completed
          </Text>
        </View>

        {/* Add Task Section */}
        <View style={homeScreenStyles.addTaskSection}>
          <View style={homeScreenStyles.inputContainer}>
            <TextInput
              style={homeScreenStyles.textInput}
              placeholder="Add a new task..."
              value={newTaskText}
              onChangeText={setNewTaskText}
              onSubmitEditing={addTask}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={homeScreenStyles.addButton}
              onPress={addTask}
              activeOpacity={0.7}
            >
              <Text style={homeScreenStyles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Tags */}
        {tasks.length > 0 && (
          <TagList
            tags={filterTags}
            selectedTag={selectedFilter}
            onTagSelect={setSelectedFilter}
          />
        )}

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleTaskComplete}
          onDelete={deleteTask}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;