import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../common/spacing';
import typography from '../common/typography';

export default StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.sectionPadding,
    marginVertical: spacing.itemMargin,
    marginHorizontal: spacing.xl,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  taskContent: {
    flex: 1,
  },
  
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  checkboxCompleted: {
    backgroundColor: colors.primary,
  },
  
  checkmark: {
    color: colors.textInverse,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
  
  taskText: {
    fontSize: typography.fontSize.md,
    flex: 1,
    color: colors.textPrimary,
  },
  
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textTertiary,
  },
  
  deleteButton: {
    padding: spacing.buttonPadding,
    marginLeft: spacing.buttonPadding,
  },
  
  deleteButtonText: {
    fontSize: typography.fontSize.lg,
  },
});