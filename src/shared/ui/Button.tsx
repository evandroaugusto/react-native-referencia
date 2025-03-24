import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native"
import { colors } from "../../core/theme/colors";
import { StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode,
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  onPress: () => void;
}
export const Button = ({onPress, children, style, textStyle}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    gap: 4
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
});
