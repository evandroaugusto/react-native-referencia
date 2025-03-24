import { View, Text, StyleSheet } from "react-native";

export function CandidatoGerenciarPresencaScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela Gerenciar Presenca</Text>
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