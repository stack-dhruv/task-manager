import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../common/spacing';
import typography from '../common/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.xl,
    color: colors.textPrimary,
  },
  
  taskDetails: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
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
  
  taskText: {
    fontSize: typography.fontSize.lg,
    marginBottom: spacing.buttonPadding,
    color: colors.textPrimary,
  },
  
  statusText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  
  noTaskText: {
    fontSize: typography.fontSize.md,
    color: colors.textTertiary,
    textAlign: 'center',
    marginTop: 50,
  },
});