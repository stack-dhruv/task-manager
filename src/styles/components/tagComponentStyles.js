import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../common/spacing';
import typography from '../common/typography';

export default StyleSheet.create({
  tag: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.inactive,
    borderRadius: 20,
    marginRight: spacing.buttonPadding,
    marginVertical: spacing.itemMargin,
  },
  
  selectedTag: {
    backgroundColor: colors.active,
  },
  
  tagText: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  
  selectedTagText: {
    color: colors.textInverse,
  },
});