import React from 'react';
import { ScrollView } from 'react-native';
import TagComponent from './TagComponent';
import tagListStyles from '../../styles/components/tagListStyles';

const TagList = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tagListStyles.container}
      contentContainerStyle={tagListStyles.contentContainer}
    >
      {tags.map((tag) => (
        <TagComponent
          key={tag}
          tag={tag}
          isSelected={selectedTag === tag}
          onPress={onTagSelect}
        />
      ))}
    </ScrollView>
  );
};

export default TagList;