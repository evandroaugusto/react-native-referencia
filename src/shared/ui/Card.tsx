import { colors } from '@core/theme/colors';
import { View, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode,
  style?: ViewStyle | ViewStyle[];
}
export const Card = (props: Props) => {
  return (
    <View style={[props.style, styles.container]}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: 16,
    paddingVertical: 24,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 16,
    gap: 12,
  },
});