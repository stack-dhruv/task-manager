import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import addTaskModalStyles from '../../styles/components/addTaskModalStyles';

const AddTaskModal = ({ visible, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;
    
    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });
    
    setTitle('');
    setDescription('');
    onClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={addTaskModalStyles.overlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={addTaskModalStyles.modalContainer}>
              <View style={addTaskModalStyles.modalContent}>
                {/* Header */}
                <View style={addTaskModalStyles.header}>
                  <Text style={addTaskModalStyles.headerTitle}>Add a Task</Text>
                  <TouchableOpacity
                    style={addTaskModalStyles.closeButton}
                    onPress={handleClose}
                  >
                    <Text style={addTaskModalStyles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                {/* Title Input */}
                <TextInput
                  style={addTaskModalStyles.titleInput}
                  placeholder="Task title"
                  value={title}
                  onChangeText={setTitle}
                  autoFocus={true}
                  returnKeyType="next"
                />

                {/* Separator Line */}
                <View style={addTaskModalStyles.separator} />

                {/* Description Input */}
                <TextInput
                  style={addTaskModalStyles.descriptionInput}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                  multiline={true}
                  numberOfLines={3}
                  textAlignVertical="top"
                  returnKeyType="done"
                />

                {/* Add Task Button */}
                <TouchableOpacity
                  style={[
                    addTaskModalStyles.addButton,
                    title.trim() === '' && addTaskModalStyles.addButtonDisabled
                  ]}
                  onPress={handleAddTask}
                  disabled={title.trim() === ''}
                  activeOpacity={0.8}
                >
                  <Text style={[
                    addTaskModalStyles.addButtonText,
                    title.trim() === '' && addTaskModalStyles.addButtonTextDisabled
                  ]}>
                    Add Task
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddTaskModal;