import { View, Text, StyleSheet } from "react-native";

export function AtualizarDadosScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela Atualizar Dados</Text>
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