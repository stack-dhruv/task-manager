import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import TaskList from '../components/tasks/TaskList';
import TagList from '../components/tags/TagList';

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Task Manager</Text>
          <Text style={styles.subtitle}>
            {stats.total} tasks • {stats.active} active • {stats.completed} completed
          </Text>
        </View>

        {/* Add Task Section */}
        <View style={styles.addTaskSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Add a new task..."
              value={newTaskText}
              onChangeText={setNewTaskText}
              onSubmitEditing={addTask}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={addTask}
              activeOpacity={0.7}
            >
              <Text style={styles.addButtonText}>+</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  addTaskSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;