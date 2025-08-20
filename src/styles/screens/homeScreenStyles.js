import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../common/spacing';
import typography from '../common/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  header: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  
  addTaskSection: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sectionPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 25,
    paddingHorizontal: spacing.xl,
    fontSize: typography.fontSize.md,
    backgroundColor: colors.gray,
  },
  
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.buttonPadding,
  },
  
  addButtonText: {
    fontSize: typography.fontSize.xl,
    color: colors.textInverse,
    fontWeight: typography.fontWeight.bold,
  },
});