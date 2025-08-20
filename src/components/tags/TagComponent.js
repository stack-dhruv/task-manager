import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tagComponentStyles from '../../styles/components/tagComponentStyles';

const TagComponent = ({ tag, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[tagComponentStyles.tag, isSelected && tagComponentStyles.selectedTag]}
      onPress={() => onPress(tag)}
      activeOpacity={0.7}
    >
      <Text style={[tagComponentStyles.tagText, isSelected && tagComponentStyles.selectedTagText]}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

export default TagComponent;