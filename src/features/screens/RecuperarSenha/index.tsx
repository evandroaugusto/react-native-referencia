import { View, Text, StyleSheet } from "react-native";

export function RecuperarSenhaScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela Recuperar Senha</Text>
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