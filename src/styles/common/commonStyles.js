import { StyleSheet } from 'react-native';
import colors from './colors';
import spacing from './spacing';

export default StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Card styles
  card: {
    backgroundColor: colors.surface,
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
  
  // Button styles
  roundButton: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Input styles
  roundInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 25,
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.gray,
  },
  
  // Text styles
  title: {
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  
  subtitle: {
    color: colors.textSecondary,
  },
  
  // Layout styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});