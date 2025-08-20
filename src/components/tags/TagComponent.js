import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TagComponent = ({ tag, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.tag, isSelected && styles.selectedTag]}
      onPress={() => onPress(tag)}
      activeOpacity={0.7}
    >
      <Text style={[styles.tagText, isSelected && styles.selectedTagText]}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  selectedTag: {
    backgroundColor: '#007AFF',
  },
  tagText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedTagText: {
    color: '#fff',
  },
});

export default TagComponent;