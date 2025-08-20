import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// This screen can be used for detailed task view or editing in future
const TaskScreen = ({ route }) => {
  const { task } = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Task Details</Text>
        {task ? (
          <View style={styles.taskDetails}>
            <Text style={styles.taskText}>{task.description}</Text>
            <Text style={styles.statusText}>
              Status: {task.completed ? 'Completed' : 'Active'}
            </Text>
          </View>
        ) : (
          <Text style={styles.noTaskText}>No task selected</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  taskDetails: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
  },
  noTaskText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default TaskScreen;