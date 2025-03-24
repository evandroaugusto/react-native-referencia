import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Card } from '@shared/ui';
import { RootStackParamList } from '@router/index';

import { useProdutoDetalhe } from './useProdutoDetalhe';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ProdutoDetalhe"
>;

export function ProdutoDetalheScreen({ route }: HomeScreenProps) {
  const navigation = useNavigation();
  const { produtoId } = route.params;

  const { produto, isLoading } = useProdutoDetalhe(produtoId);

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (!produto || isLoading) {
    return <View style={styles.loader}>
      <ActivityIndicator size={32} />
    </View>
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{produto.title}</Text>
      <Image source={{ uri: produto.thumbnail }} resizeMode='contain' style={styles.image} />

      <Card>
        <Text style={styles.category}>{produto.category}</Text>
        <Text style={styles.content}>{produto.description}</Text>
      </Card>

      <Button onPress={handleBackPress}>VOLTAR</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 13
  }
});
