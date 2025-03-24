import { View, Text, StyleSheet } from "react-native";

export function CandidatoCapturarMediaScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela Capturar Media</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});