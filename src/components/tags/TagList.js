import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TagComponent from './TagComponent';

const TagList = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
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

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
  },
  contentContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default TagList;