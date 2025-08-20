import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../common/spacing';
import typography from '../common/typography';

export default StyleSheet.create({
  list: {
    flex: 1,
  },
  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  
  emptyText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textTertiary,
    marginBottom: spacing.buttonPadding,
  },
  
  emptySubtext: {
    fontSize: typography.fontSize.md,
    color: colors.textLight,
  },
});