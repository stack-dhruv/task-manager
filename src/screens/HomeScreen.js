import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import TaskList from '../components/tasks/TaskList';
import TagList from '../components/tags/TagList';
import AddTaskModal from '../components/tasks/AddTaskModal';
import homeScreenStyles from '../styles/screens/homeScreenStyles';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  // Filter options
  const filterTags = ['All', 'Active', 'Completed'];

  // Add new task
  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([newTask, ...tasks]);
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

  // Get active and completed tasks
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (selectedFilter) {
      case 'Active':
        return activeTasks;
      case 'Completed':
        return completedTasks;
      default:
        return tasks;
    }
  };

  // Get task statistics
  const getTaskStats = () => {
    const total = tasks.length;
    const completed = completedTasks.length;
    const active = activeTasks.length;
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

        {/* Filter Tags - Only show when there are tasks */}
        {tasks.length > 0 && (
          <TagList
            tags={filterTags}
            selectedTag={selectedFilter}
            onTagSelect={setSelectedFilter}
          />
        )}

        {/* Task Lists */}
        <View style={homeScreenStyles.taskContainer}>
          {filteredTasks.length > 0 ? (
            <TaskList
              tasks={filteredTasks}
              onToggleComplete={toggleTaskComplete}
              onDelete={deleteTask}
              showHeader={false}
              isCompleted={selectedFilter === 'Completed'}
            />
          ) : (
            <View style={homeScreenStyles.emptyContainer}>
              <Text style={homeScreenStyles.emptyText}>
                {tasks.length === 0 ? 'No tasks yet!' : `No ${selectedFilter.toLowerCase()} tasks`}
              </Text>
              <Text style={homeScreenStyles.emptySubtext}>
                {tasks.length === 0 ? 'Add a task to get started' : `You have no ${selectedFilter.toLowerCase()} tasks`}
              </Text>
            </View>
          )}
        </View>

        {/* Add Task Button */}
        <TouchableOpacity
          style={homeScreenStyles.addTaskButton}
          onPress={() => setShowAddTaskModal(true)}
          activeOpacity={0.8}
        >
          <Text style={homeScreenStyles.addTaskButtonIcon}>+</Text>
          <Text style={homeScreenStyles.addTaskButtonText}>Add a Task</Text>
        </TouchableOpacity>

        {/* Add Task Modal */}
        <AddTaskModal
          visible={showAddTaskModal}
          onClose={() => setShowAddTaskModal(false)}
          onAddTask={addTask}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;