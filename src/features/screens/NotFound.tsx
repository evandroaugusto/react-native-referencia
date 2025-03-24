import { Text, Button } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text>404 - Não existe</Text>
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
