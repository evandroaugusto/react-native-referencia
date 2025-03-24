import { View, Text, StyleSheet } from "react-native";
import { useProdutos } from "./useProdutos";
import { ScrollView } from "react-native-gesture-handler";
import { ProdutoCard } from "./ProdutoCard";

export function ProdutosScreen() {
  const { produtos, loading } = useProdutos();

  return (
    <ScrollView  contentContainerStyle={{padding: 12}}>
      <View style={styles.container}>
        {produtos.map(produto => {
          return <ProdutoCard produto={produto} />
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});